import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Carousel from '../Carousel';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Cart from '../Cart';
import "./app.css"
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import ContactUs from '../ContactUs';
import Footer from '../Footer';
import SubPage from '../ContactUs/SubmittedPage';
import Messages from '../ContactUs/Messages';
import EditInfo from '../EditInfo';
import Checkout from '../Checkout';


const App = () => (
    <Router basename="/mayla-co">
        <div>
            <Navigation />
            <Carousel />
            <div className="main-content">
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route
                    exact
                    path={ROUTES.PASSWORD_FORGET}
                    component={PasswordForgetPage}
                />
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                <Route exact path={ROUTES.CONTACTUS} component={ContactUs} />
                <Route exact path={ROUTES.CART} component={Cart} />
                <Route exact path={ROUTES.SUBPAGE} component={SubPage} />
                <Route exact path={ROUTES.MESSAGES} component={Messages} />
                <Route exact path={ROUTES.EDIT_INFO} component={EditInfo} />
                <Route exact path={ROUTES.CHECKOUT} component={Checkout} />
            </div>
            <Footer />
        </div>
    </Router>
);

export default withAuthentication(App);