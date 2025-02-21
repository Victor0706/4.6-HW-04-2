import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


   function CategoryDetail() {
     const {category_id} = useParams();  
     const [recipes, setRecipes] = useState([]);

     useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/categories/${category_id}/recipes/`)
         .then(response => setRecipes(response.data))
         .catch(error => console.error(error));
     }, [category_id]);

     return (
       <div>
         <h1>Рецепты блюд из категории: </h1>
         <ul>
           {recipes.map((recipe) => (
             <li key={recipe.id}>
                  <Link to={`/recipes/${recipe.id}/`}>{recipe.title}</Link>
             </li>
           ))}
         </ul>
         <Link to='/categories'>Назад на главную страницу</Link>
       </div>
     );
   }

   export default CategoryDetail;