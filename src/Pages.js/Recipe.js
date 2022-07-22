import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  const param = useParams();

  const getSearchRecipes = async id => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    ).then(res => res.json());
    setDetails(data);
  };

  useEffect(() => {
    getSearchRecipes(param.id);
  }, [param.id]);

  return (
    <div className="recipe-details">
      <div className="recipe-left-card">
        <h1>{details.title}</h1>
        <img src={details.image} alt={details.title} />
      </div>
      <div className="recipe-right-card">
        <div className="recipe-buttons">
          <button className={activeTab === 'instructions' && 'active'} onClick={() => setActiveTab('instructions')}>Instructions</button>
          <button className={activeTab === 'Ingredients' && 'active'} onClick={() => setActiveTab('Ingredients')}>Ingredients</button>
        </div>
        {activeTab ==='instructions' ? (
          <div className="recipe-instructions">
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <ul className="recipe-ingredients">
            {details.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
