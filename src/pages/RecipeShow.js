import React from "react";
import "./RecipeShow.scss"
import RecipeModel from "../models/recipe";
import Ingredients from '../components/Recipes/Ingredients';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    // handleEdit = () => {
    //     RecipeModel.update(this.state.recipe._id).then((json) => {
    //         this.props.history.push(`/recipes/${json.recipe._id}`);
    //     })
    // }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchData();
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
                {this.state.recipe ? (
                    <>
                        <div className="wrapper">
                            <div className="card-container">

                                <header>
                                    <div className="delete-edit">
                                        <button className="delete" onClick={this.handleDelete}>
                                            <FontAwesomeIcon className="icon" icon='trash-alt' />
                                        </button>

                                        <FontAwesomeIcon className="icon" icon='edit' />
                                    </div>
                                    <h1>{this.state.recipe.name}</h1>
                                </header>

                                <div className="split">
                                    <section className="ingredients">
                                        <h3>ingredients</h3>
                                        <br />
                                        {this.state.recipe && <Ingredients ingredients={this.state.recipe.ingredients} />}
                                    </section>
                                    <section className="directions">
                                        <h3>directions</h3>
                                        <br />
                                        {this.state.recipe.directions}
                                    </section>
                                </div>

                            </div>

                        </div>
                    </>
                ) : (
                        <h1>Loading...</h1>
                    )}
            </>
        );
    }
}

export default RecipeShow;
