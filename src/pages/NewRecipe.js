import React from 'react';
import "./NewRecipe.scss"
import RecipeModel from '../models/recipe';
import NewIngredientForm from '../components/Recipes/NewIngredientForm';

class NewRecipe extends React.Component {
    state = {
        name: '',
        directions: '',
        ingredients: [
            {
                name: '',
                quantity: '',
                measurement: '',
            }
        ],
        error: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.name !== "") {
            RecipeModel.create(this.state).then((json) => {
                console.log(json);

                this.props.history.push(`/recipes/${json.recipe._id}`);
            });
        } else {
            this.setState({ error: "Name is required." });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateIngredients = (ingredients) => {
        this.setState({ ingredients })
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form-container">
                    <header>
                        <h1>Create New Recipe</h1>
                    </header>

                    <div className='form'>
                        {this.state.error && <p>{this.state.error}</p>}

                        <form onSubmit={this.handleSubmit}>
                            <div className="split">
                                <div className="new-recipe-form">
                                    <p>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='recipe name'
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </p>
                                    <p>
                                        <textarea
                                            name='directions'
                                            placeholder='directions'
                                            value={this.state.directions}
                                            onChange={this.handleChange}
                                            rows="18"
                                            cols="36"
                                        />
                                    </p>
                                </div>
                                <NewIngredientForm updateIngredients={this.updateIngredients} />

                            </div>
                            <div className="submit-button">
                                <button onClick={this.handleSubmit}>Create</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewRecipe;