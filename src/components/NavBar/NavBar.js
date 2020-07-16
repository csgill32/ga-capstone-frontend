import React from 'react';
import './NavBar.scss';
import NavBarLoggedIn from './NavBarLoggedIn';
import NavBarLoggedOut from './NavBarLoggedOut'
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <NavBarLoggedIn {...props} />;
    }
    return <NavBarLoggedOut />;

}

export default withRouter(NavBar);