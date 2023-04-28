import React from "react";
import "./Components.css";

export const RecipeCard = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        <ul className="list-group">
          {recipes.map((recipe, index) => (
            <li key={index} className="list-group-item">
              <h2>{recipe.recipe.label}</h2>
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="img-fluid"
              />
              <p>
                <strong>Ingredients: </strong>
                <ul>
                  {recipe.recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.foodId}>{ingredient.text}, </li>
                  ))}
                  <button 
                    className="recipe-url btn btn-primary"
                    >
                      Add ingredients to shopping list
                  </button>
                </ul>
              </p>
              <p>
                <strong>Calories: </strong>
                {Math.round(recipe.recipe.calories)} kcal
              </p>
              <p>
                <strong>Source: </strong>
                {recipe.recipe.source}
              </p>
              <p>
                <a href={recipe.recipe.url} target="_blank" rel="noreferrer">
                  <button className="recipe-url btn btn-primary">
                    Go to the recipe
                  </button>
                </a>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};
