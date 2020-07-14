import React from "react";

const Ingredients = (props) => {

    function generateIngredients(ingredients) {
        return ingredients.map((ingredient) => {
            return <ingredientCard key={ingredient._id} ingredient={ingredient} />;
        });
    }

    return <div className='ingredients-container'>
        <h3>Ingredients</h3>
        {generateIngredients(props.data)}
    </div>;
};

export default Ingredients;