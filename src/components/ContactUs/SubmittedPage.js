import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';



import React from 'react';

const SubPage = () => (
    <div className="subPage">
        <h2 >Thank You for your email.</h2>

        <h4>We will contact you in 24 hours.</h4>
        <Link to={ROUTES.HOME}>Return to Home Page</Link><br />
        <Link to={ROUTES.MESSAGES}>Check previous Messages</Link>
    </div>
);
export default SubPage;
