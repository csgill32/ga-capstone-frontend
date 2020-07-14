import React from "react";
import { Link } from "react-router-dom";

const IngredientCard = (props) => {
    const { name, quantity, measurement, _id } = props.ingredient;
    return (
        <div className='ingredient-card'>
            <p>{quantity} {measurement} {name}</p>
        </div>
    );
};

export default IngredientCard;