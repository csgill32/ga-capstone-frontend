import React from "react";
import RecipeModel from "../models/recipe";

class RecipeShow extends React.Component {
    state = {
        recipe: null,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        RecipeModel.show(this.props.match.params.id).then((json) => {
            this.setState({ recipe: json.recipe });
        });
    };

    handleDelete = () => {
        RecipeModel.delete(this.state.recipe._id).then((json) => {
            this.props.history.push("/recipes");
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchData();
        }
    }

    render() {
        return (
            <>
                {this.state.recipe ? (
                    <>
                        <h1>{this.state.recipe.name}</h1>
                        <p>Directions: {this.state.recipe.directions}</p>
                        {/* <p>Ingredients: {this.state.recipe.ingredients}</p> */}
                        <button onClick={this.handleDelete}>Delete</button>
                    </>
                ) : (
                        <h1>Loading...</h1>
                    )}
            </>
        );
    }
}

export default RecipeShow;
