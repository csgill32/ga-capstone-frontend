import React from 'react';
import RecipeModel from '../models/recipe';

class EditRecipe extends React.Component {
    state = {
        recipe: this.props.match.params.id
    }

    handleUpdate = (event) => {
        event.preventDefault();
        RecipeModel.update(this.state).then((json) => {
            this.props.history.push(`/recipes/${this.state.recipe}`);
        });
    };

    handleChange = (event) => {
        console.log(this.props.match.params.id);
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="form-wrapper">
                <div className="form-container">
                    <header>
                        <h1>Edit Recipe</h1>
                    </header>

                    <div className='form'>
                        {this.state.error && <p>{this.state.error}</p>}

                        <form onSubmit={this.handleUpdate}>
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
                                        />
                                    </p>
                                </div>

                            </div>
                            <div className="submit-button">
                                <input type='submit' value='Edit Recipe' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditRecipe;