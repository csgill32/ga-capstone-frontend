import React from "react";
import RecipeCard from './RecipeCard'

const Recipes = (props) => {

    function generateRecipeCards(recipes) {
        return recipes.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
        });
    }

    return <div className='recipes-container'>{generateRecipeCards(props.data)}</div>;
};

export default Recipes;