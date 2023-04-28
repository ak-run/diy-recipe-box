import React, { Component } from "react";
import { Card } from "./NavCards";

// import cooking from "../assets/cooking.jpg";
// import shopping from "../assets/foodShopping.jpg";
import { Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export const Cards = () => {
    return (
      <>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <Link
                to="/RecipeFinder"
                className="Link nav-card-link"
                onClick={scrollToTop}
              >
                <Card
                //   imgsrc={cooking}
                  title="Find a recipe"
                  body="Search our recipe database by ingredient to find your next dish."
                  buttontext="Search recipes"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Link
                to="/ShoppingList"
                className="Link nav-card-link"
                onClick={scrollToTop}
              >
                <Card
                //   imgsrc={shopping}
                  title="Create a shopping list"
                  body="Export ingredients from your chosen recipes to create your shopping list."
                  buttontext="Create list"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Link
                // to="/ShoppingList"
                className="Link nav-card-link"
                onClick={scrollToTop}
              >
                <Card
                //   imgsrc={shopping}
                  title="Add a recipe"
                  body="Add and save a recipe."
                  buttontext="Create list"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Link
                // to="/ShoppingList"
                className="Link nav-card-link"
                onClick={scrollToTop}
              >
                <Card
                //   imgsrc={shopping}
                  title="Weekly meal planner"
                  body="Save recipes for this week and plan your shopping"
                  buttontext="Create list"
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }


