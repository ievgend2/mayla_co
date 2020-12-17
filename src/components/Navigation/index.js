import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import * as ROUTES from '../../constants/routes';
import './navigation.css'
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (

    <header className="main-navigation text-center">
        {/* <div classNmae="main-navigation_logo"></div> */}
        <nav className="main-navigation_item ">
            <ul>
                <li> <NavLink to={ROUTES.LANDING}>Landing</NavLink></li>

                <li> <NavLink to={ROUTES.HOME}>Home</NavLink></li>

                <li>
                    <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink>
                </li>

                <li><Dropdown /></li>
            </ul>
        </nav>
    </header>

);

const NavigationNonAuth = () => (
    <header className="main-navigation">
        <nav className="main-navigation_item">
            <ul>
                <li> <NavLink to={ROUTES.LANDING}>Landing</NavLink></li>

                <li>
                    <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink>
                </li>

                <li><Dropdown /></li>
            </ul>
        </nav>

    </header>
);

export default Navigation;