import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { recipe_id } = useParams();  

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/recipes/${recipe_id}/`);
        setRecipe(response.data); 
      } catch (err) {
        setError(err.message);  
      } finally {
        setLoading(false);  
      }
    };

    fetchRecipe();  
  }, [recipe_id]);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (recipe) {
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <Link to='/categories'>Назад на главную страницу</Link>
      </div>
    );
  }

  return <div>Recipe not found.</div>;
};

export default RecipeDetail;





  