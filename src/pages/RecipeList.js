import React from "react";
import "./RecipeList.scss";
import RecipeModel from "../models/recipe";
import Recipes from "../components/Recipes/Recipes";

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
                    <h1>my recipes</h1>
                    <div className="list">
                        <Recipes data={this.state.recipes} />
                    </div>
                </div>
            </div>

        )
    }
}

export default RecipeList;