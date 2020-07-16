import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import UserModel from "../../models/user";

const NavBarLoggedIn = (props) => {

    const handleLogout = () => {
        UserModel.logout().then((json) => {
            props.setLogin(false);
            props.history.push("/login");
        });
    };

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
                        <li>
                            <button onClick={handleLogout}>Logout</button>
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

export default NavBarLoggedIn;