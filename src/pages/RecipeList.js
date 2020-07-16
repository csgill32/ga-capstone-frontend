import React from "react";
import { Link } from 'react-router-dom';
import "./RecipeList.scss";
import RecipeModel from "../models/recipe";
import Recipes from "../components/Recipes/Recipes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RecipeList extends React.Component {
    state = {
        recipes: [],
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        RecipeModel.all().then((json) => {
            this.setState({ recipes: json.recipes });
        });
    };

    render() {
        return (
            <div className="list-wrapper">
                <div className="list-container">

                    <h1>my recipes
                        <Link className="add-icon" to={'/recipes/new'}>
                            <FontAwesomeIcon className="icon" icon='plus' />
                        </Link>
                    </h1>

                    <div>

                    </div>
                    <div className="list">
                        <Recipes data={this.state.recipes} />
                    </div>
                </div>
            </div>

        )
    }
}

export default RecipeList;