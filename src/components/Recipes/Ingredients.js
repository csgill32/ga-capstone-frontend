import React from "react";
import IngredientCard from "./IngredientCard"

const Ingredients = (props) => {

    function generateIngredients(ingredient) {
        return props.ingredients.map((ingredient) => {
            return <IngredientCard key={ingredient._id} ingredient={ingredient} />;
        });
    }

    return <div className='ingredients-container'>
        {generateIngredients(props.data)}
    </div>;
};

export default Ingredients;