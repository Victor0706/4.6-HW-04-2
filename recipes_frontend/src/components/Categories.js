import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Categories () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
       axios.get('http://127.0.0.1:8000/api/categories/')
         .then(response => setCategories(response.data))
         .catch(error => console.error(error));
     }, []);

     return (
       <div>
         <h1>Главная страница</h1>
         <h1>Категории всех блюд</h1>
         <ul>
           {categories.map(category => (
             <li key={category.id}>
               <Link to={`/categories/${category.id}/recipes`}>{category.name}</Link>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default Categories;