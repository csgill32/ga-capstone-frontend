import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

class NavBarLoggedOut extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <header className="header">
                    <h1 className="logo">
                        RECIPE BOOK
                    </h1>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>register</NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>log in</NavLink>
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

export default NavBarLoggedOut;