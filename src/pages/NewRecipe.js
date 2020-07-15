import React from 'react';
import "./NewRecipe.scss"
import RecipeModel from '../models/recipe';

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

    render() {
        return (
            <div className='new-recipe-form'>
                {this.state.error && <p>{this.state.error}</p>}
                <h3>Recipe Information</h3>
                <form onSubmit={this.handleSubmit}>
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
                    <input type='submit' value='Create New Recipe' />
                </form>
            </div>
        );
    }
}

export default NewRecipe;