import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  const param = useParams();

  const getCuisine = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`
    ).then(res => res.json());
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(param.type);
  }, [param]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid"
    >
      {cuisine.map(recipe => (
        <Link to={`/recipe/${recipe.id}`}>
          <div key={recipe.id} className="grid-card">
            <img className="grid-img" src={recipe.image} alt={recipe.title} />
            <span className="grid-title">{recipe.title}</span>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export default Cuisine;
