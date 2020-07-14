import React from 'react';

import RecipeModel from '../models/recipe';

class NewRecipe extends React.Component {
    state = {
        name: '',
        description: '',
        ingredients: [],
        created: false,
        error: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.title !== "") {
            RecipeModel.create(this.state).then((json) => {
                console.log(json);

                this.props.history.push(`/recipe/${json.recipe._id}`);
            });
        } else {
            this.setState({ error: "Title is required." });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className='new-game-form'>
                {this.state.error && <p>{this.state.error}</p>}
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
                        <input
                            type='text'
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