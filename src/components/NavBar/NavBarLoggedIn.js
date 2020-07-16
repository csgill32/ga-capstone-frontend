import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

class NavBarLoggedIn extends React.Component {
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
                                <NavLink to='/recipes'>my recipes</NavLink>
                            </li>
                            <li>
                                <NavLink to='/recipes/new'>create recipe</NavLink>
                            </li>
                            <li>
                                <NavLink to='/logout'>logout</NavLink>
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

export default NavBarLoggedIn;