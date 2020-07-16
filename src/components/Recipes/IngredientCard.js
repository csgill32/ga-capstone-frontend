import React from "react";

const IngredientCard = (props) => {
    const { name, quantity, measurement } = props.ingredient;

    return (
        <div className='ingredient-card'>
            <p>{quantity} {measurement} {name}</p>
        </div>
    );
};

export default IngredientCard;