import React from "react";

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
        return <Recipes data={this.state.recipes} />;
    }
}

export default RecipeList;