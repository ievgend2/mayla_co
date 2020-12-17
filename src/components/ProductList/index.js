import React, { Component } from 'react';
import Couch1 from "./../../image/couch1.jpg"
import Couch2 from "./../../image/couch2.jpg"
import Couch3 from "./../../image/couch3.jpg"
import Couch4 from "./../../image/couch4.jpg"
import { Card, Button, CardDeck, DropdownButton } from 'react-bootstrap'

import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const q1 = 1;
const q2 = 2;
const q3 = 3;

const ProductPage = () => (
    <AuthUserContext.Consumer>

        {authUser => (

            <ProductsList />

        )}
    </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;



class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            products: [{
                name: 'Dog Bed #1',
                product_description: 'Great couch for small dogs.',
                price: 75.99,
                image: Couch1,
                id: 1,
                quantity: 1

            },
            {
                name: 'Dog Bed #2',
                product_description: 'Good couch for medium dogs.',
                price: 85.99,
                image: Couch2,
                id: 2,
                quantity: 1
            },
            {
                name: 'Dog Bed #3',
                product_description: 'Make your pup fly.',
                price: 95.99,
                image: Couch3,
                id: 3,
                quantity: 1
            },
            {
                name: 'Dog Bed #4',
                product_description: 'Perfect for large dogs.',
                price: 105.99,
                image: Couch4,
                id: 4,
                quantity: 1
            }]
        }

    }



    addToCart = (product) => {
        this.setState({ cart: { product } }, () => {
            console.log(this.state.cart)
        });

        const user = this.props.firebase.auth?.currentUser;
        this.props.firebase.user(user.uid + '/cart').push({
            ...product
        });
    };

    render() {
        return (
            <AuthUserContext.Consumer>

                {authUser => (
                    <CardDeck className="g-2">
                        {this.state.products.map((product, idx) => (

                            <Card className="text-center" key={idx}>
                                <Card.Body >
                                    <Card.Img variant="top" src={product.image} className="card-img" />
                                    <Card.Title><span>{product.name}</span> <span>${product.price}</span></Card.Title>

                                    <Card.Text>
                                        {product.product_description}
                                    </Card.Text>


                                    <Button variant="dark" className="" onClick={() => this.addToCart(product, authUser)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        ))}

                    </CardDeck>
                )}

            </AuthUserContext.Consumer>
        );
    }
}

const ProductsList = compose(
    withRouter,
    withFirebase,
)(Products);

export default withAuthorization(authCondition)(ProductPage);
export { ProductsList };