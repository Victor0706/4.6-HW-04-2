import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Categories from './components/Categories';
import CategoryDetail from './components/CategoryDetail';
import RecipeDetail from './components/RecipeDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/categories' element={<Categories/>} />
        <Route path='/categories/:category_id/recipes' element={<CategoryDetail/>} />
        <Route path='/recipes/:recipe_id' element={<RecipeDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
