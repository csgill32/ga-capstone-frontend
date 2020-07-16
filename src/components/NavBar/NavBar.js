import React from 'react';
import './NavBar.scss';
import NavBarLoggedIn from './NavBarLoggedIn';
import NavBarLoggedOut from './NavBarLoggedOut'

const NavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <NavBarLoggedIn />;
    }
    return <NavBarLoggedOut />;

}

export default NavBar;