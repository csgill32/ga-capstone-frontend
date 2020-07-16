import React from 'react';
import RecipeModel from '../models/recipe';
import EditIngredientForm from '../components/Recipes/EditIngredientForm';
import './EditRecipe.scss';

class EditRecipe extends React.Component {
    state = {
        recipe: null,
        ingredients: [],
        name: '',
        directions: '',
    }

    handleUpdate = (event) => {
        event.preventDefault();
        RecipeModel.update(this.state).then((json) => {
            this.props.history.push(`/recipes/${this.props.match.params.id}`);
        });
    };

    handleChange = (event) => {
        console.log(this.props.match.params.id);
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        RecipeModel.show(this.props.match.params.id).then((json) => {
            this.setState({ recipe: json.recipe, ingredients: json.recipe.ingredients, name: json.recipe.name, directions: json.recipe.directions });
        });
    };

    updateIngredients = (ingredients) => {
        this.setState({ ingredients })
    }

    render() {
        return (
            <>
                {
                    this.state.recipe ?
                        <div className="form-wrapper">
                            <div className="form-container">
                                <header>
                                    <h1>Edit {this.state.recipe.name}</h1>
                                </header>

                                <div className='form'>
                                    {this.state.error && <p>{this.state.error}</p>}

                                    <form onSubmit={this.handleUpdate}>
                                        <div className="split">
                                            <div className="edit-recipe-form">
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
                                                        rows="22"
                                                        cols="45"
                                                    />
                                                </p>
                                            </div>
                                            <EditIngredientForm ingredients={this.state.ingredients} updateIngredients={this.updateIngredients} />
                                        </div>
                                        <div className="submit-button">
                                            <button onClick={this.handleUpdate}>edit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        : <p>loading...</p>
                }
            </>
        );
    }
}

export default EditRecipe;