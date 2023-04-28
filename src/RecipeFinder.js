import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import { RecipeCard } from "./components/RecipeCard";

export const RecipeFinder = () => {
  const APP_ID = "781bce9d";
  const APP_KEY = "cf99ed83c233e411abcc308146a7e7eb";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const searchRecipes = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = response.data;
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1 class="my-shopping-list">Recipe Finder</h1>
        <p>
          Enter an ingredient or recipe in the box below and hit enter to search
          for a recipe.
        </p>
        <form onSubmit={searchRecipes}>
          <div className="input-group mb-3">
            <input
              type="text"
              aria-label="search for recipes by ingredient"
              className="form-control"
              placeholder="Search for recipes..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <RecipeCard recipes={recipes} />
      </div>
    </>
  );
}
