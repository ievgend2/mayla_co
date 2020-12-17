import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductList from '../ProductList';

const HomePage = () => (
    <div>
        <div className="text-center">
            <h1>Home Page</h1>
            <h4>Select an item and press add to cart.</h4>
            <p>The Home Page is accessible by signed in user.</p>
        </div>
        {/* <CardGroup className="container" > */}
        <ProductList />

        {/* </CardGroup> */}
    </div>
);
// keep this to use home page with auth ON, othervise access to home page denied go sign in

export default HomePage;




