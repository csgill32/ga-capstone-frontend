import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RecipeList from '../pages/RecipeList';
import RecipeShow from '../pages/RecipeShow'
import NewRecipe from '../pages/NewRecipe';
import EditRecipe from '../pages/EditRecipe';
import Register from '../pages/Register';
import Login from '../pages/Login'

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Register} />
            {/* <Route path='/register' component={Register} /> */}
            <Route exact path='/login' render={(routerProps) => <Login {...props} {...routerProps} />} />
            <Route path='/recipes/new' component={NewRecipe} />
            <Route path='/recipes/:id/edit' component={EditRecipe} />
            <Route path='/recipes/:id' component={RecipeShow} />
            <Route path='/recipes' component={RecipeList} />

        </Switch>
    );
}

export default Routes;