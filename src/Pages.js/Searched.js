import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
  const [searchRecipes, setSearchRecipes] = useState([]);

  const param = useParams();

  const getSearchRecipes = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
    ).then(res => res.json());
    setSearchRecipes(data.results);
  };

  useEffect(() => {
    getSearchRecipes(param.search);
  }, [param.search]);

  return (
    <div className="grid">
      {searchRecipes.map(recipe => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div  className="grid-card">
            <img className="grid-img" src={recipe.image} alr={recipe.title} />
            <span className="grid-title">{recipe.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Searched;
