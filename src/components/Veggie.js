import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from 'react-router-dom';


function Veggie() {
  const [veggierRecipes, setVeggierRecipes] = useState([]);
  useEffect(() => {
    getVeggieRecipes();
  }, []);

  const getVeggieRecipes = async () => {
    
      const data = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      ).then(res => res.json());
      localStorage.setItem("viggie", JSON.stringify(data.recipes));
      setVeggierRecipes(data.recipes);
    
  };

  return (
    <div className="popular-recipes">
      <h1>Our Vigetarien Picks</h1>
      <Splide
        options={{
          gap: "2rem",
          arrows: false,
          pagination: false,
          fixedWidth: "300px",
          drag: "free",
        }}
      >
        {veggierRecipes.map(recipe => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
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

export default Veggie;
