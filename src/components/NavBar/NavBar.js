import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <header className="header">
                    <h1 className="logo">
                        <a href="/">RECIPE BOOK</a>
                    </h1>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/register'>Register</NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>Log in</NavLink>
                            </li>
                            <li>
                                <NavLink to='/recipes'>View Recipes</NavLink>
                            </li>
                            <li>
                                <NavLink to='/recipes/new'>Create Recipe</NavLink>
                            </li>
                            <li>
                                <NavLink to='/logout'>Logout</NavLink>
                            </li>
                        </ul>
                    </nav>

                </header>
                <footer>
                    <p>	&copy; Christine Gill 2020</p>
                </footer>
            </div>
        )
    }
}

export default NavBar;