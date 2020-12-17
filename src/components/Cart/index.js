import { Button } from 'react-bootstrap'
import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';




const CartPage = () => (

    <div>
        <h1 className="text-center">My Cart:</h1>
        <div className=" text-center container">
            <div>
                <CartBase />

            </div>
        </div>
    </div>

);



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loading: false,
            cart: []
        };
    }



    componentDidMount() {
        this.setState({ loading: true });
        const user2 = this.props.firebase.auth?.currentUser;

        if (!user2) {
            this.setState({
                loading: false,
            });
            return;
        }
        this.props.firebase.user(user2.uid + '/cart').on('value', snapshot => {
            const cartObject = snapshot.val();
            console.log(cartObject)
            if (cartObject) {

                this.setState({
                    loading: false,
                    cart: Object.keys(cartObject).map((uid) => {
                        const cartItem = cartObject[uid]
                        return {
                            ...cartItem,
                            uid
                        }
                    }
                    )
                });
            }
            else {
                this.setState({
                    loading: false,
                    cart: []
                })
            }

        });

    }


    // componentWillUnmount() {
    //     this.setState({ loading: false })
    // }

    // addToCart = () => {
    //     this.setState({ cart: { product } }, () => {
    //         console.log(this.state.cart)
    //     });

    //     const user = this.props.firebase.auth?.currentUser;
    //     this.props.firebase.user(user.uid + '/cart').push({
    //         ...product
    //     });
    // };


    cleanCart = () => {

        // this.setState({ cart: null })


        const user = this.props.firebase.auth?.currentUser;
        this.props.firebase.user(user.uid).update({
            cart: null
        });
    };




    render() {
        const { cart, loading } = this.state;

        return (
            // <AuthUserContext.Consumer>
            //  {authUser => (
            <div>
                {loading && <div>Loading ...</div>}
                {cart.length > 0 ? (<div>
                    <div className="d-flex justify-content-between price"><button type="button" className=" btn-small btn btn-outline-dark btn-sm " onClick={() => this.cleanCart()}>Clean Cart</button>
                        <p className="p-price">Price</p> </div>
                    {/* <div className="price"></div> */}

                    <CartList cart={cart} className="container"> </CartList>
                    <ProceedToCheckout /></div>
                ) : (
                        <div className="mb-3">Cart is empty</div>
                    )}
            </div>
            // )}
            /* </AuthUserContext.Consumer> */
        );
    }
}

const CartList = ({ cart }) => (

    <div>
        <ul className="cart_list">
            {/* <div><Button variant="dark" onClick={() => this.cleanCart()}>Clean Cart</Button><p className="price text-right">Price</p> </div> */}
            {cart.map(cartItem => (
                <Item key={cartItem.uid} cartItem={cartItem} />

            ))}
        </ul>
        <div>
            <ul className=" ">


                <li className="total text-right">
                    Subtotal ({cart.length}  {cart.length === 1 ? (<span>item</span>) : (<span>items</span>)}) :<strong> ${cart.reduce((sum, item) =>
                    sum + item.price, 0)}</strong></li>
            </ul>
        </div>
    </div>
);


const Item = ({ cartItem }) => (
    <li className="item_li d-flex justify-content-between mb-5 text-center-sm">
        <img src={cartItem.image} className="item_icon" alt={cartItem.name}></img>
        <div className="flex-fill text-left ml-5"
        ><h3 className="">{cartItem.name}</h3>
            <h5 className="">{cartItem.product_description}</h5>
        </div>
        <h4>${cartItem.price} </h4></li>
);
const ProceedToCheckout = () => (
    <div className="text-center">
        <Button variant="dark"><NavLink className="button button-dark" to={ROUTES.CHECKOUT}>Proceed to Checkout</NavLink></Button>
    </div>


);
const condition = authUser => !!authUser;

const CartBase = compose(
    withRouter,
    withFirebase,
)(Cart);


export default compose(
    withAuthorization(condition)(CartPage));
export { CartBase };








