import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from 'react-router-dom';

function Popular() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  useEffect(() => {
    getPoppularRecipes();
  }, []);

  const getPoppularRecipes = async () => {
    
      const data = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      ).then(res => res.json());
      setPopularRecipes(data.recipes);
    
  };

  return (
    <div className="popular-recipes">
      <h1>Popular Picks</h1>
      <Splide
        options={{
          gap: "2rem",
          arrows: false,
          pagination: false,
          fixedWidth: "230px",
          drag: "free",
        }}
      >
        {popularRecipes.map(recipe => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} >
            <div className="popular-recipes-card">
              <p className="recipe-title">{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
