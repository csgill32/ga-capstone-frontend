import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.scss";

const RecipeCard = (props) => {
    const { name, directions, ingredients, _id } = props.recipe;
    return (
        <Link to={`/recipes/${_id}`}>
            <div className='recipe-card'>
                <h3>{name}</h3>
            </div>
        </Link>
    );
};

export default RecipeCard;