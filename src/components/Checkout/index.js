import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import { Button } from 'react-bootstrap'
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { withRouter, NavLink } from 'react-router-dom';
import { compose } from 'recompose';



const CheckoutPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="">
                <h1 className="text-center">Checkout</h1>
                <h4 className="text-center">Please verify information:</h4>
                <ProfileForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);
const authCondition = authUser => !!authUser;

const INITIAL_STATE = {
    loading: false,
    error: null,

    address: '',
    address2: '',
    city: '',
    email: '',
    name: '',
    state: '',
    uid: '',
    username: '',
    zip: '',
};

class ProfileFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });
        const user2 = this.props.firebase.auth?.currentUser;

        if (!user2) {
            this.setState({ loading: false });
            return;
        }
        this.props.firebase.user(user2.uid).on('value', snapshot => {
            const userObject = snapshot.val();

            this.setState({
                loading: false,
                address: userObject.address,
                addres2: userObject.address2,
                city: userObject.city,
                email: userObject.email,
                name: userObject.name,
                state: userObject.state,
                uid: userObject.uid,
                username: userObject.username,
                zip: userObject.zip,
            });

            this.setState({ loading: false });
        });

    }

    checkout = () => {

        // this.setState({ cart: null })


        const user = this.props.firebase.auth?.currentUser;
        this.props.firebase.user(user.uid).update({
            cart: null
        });
        this.props.history.push(ROUTES.HOME);
    };

    render() {
        const { name, username, address, address2, city, email, state, zip } = this.state;

        return (

            <div className="container">
                <ul><strong>1. Shipping information: </strong></ul>
                {
                    name === "" || name == null ? <span className="li_info">Profile information is missing. <Link className="mr-1" to={ROUTES.ACCOUNT}>Add Information. </Link> </span> : <ul className="mx-auto">
                        <li className="li_info">{name}</li>
                        <li className="li_info">{address} {address2}</li>
                        <li className="li_info">{city}, {state} {zip}</li>
                    </ul>
                }



                <ul className="info_list"> <strong>2. Payment method:</strong>

                    <li className="li_info">
                        <i className="fa fa-cc-visa mr-1"></i> <strong className="mr-1"> Visa</strong> ending 2253</li>
                    <li className="li_info">
                        <Link className="mr-1" to={ROUTES.ACCOUNT}>Billing address: </Link>
                      Same as shipping address.</li>
                </ul>
                <div className="text-center mt-4">
                    <Button variant="dark" className="btn button-dark " onClick={() => this.checkout()}>Place Order & Return Home</Button>
                    <button type="button" className=" btn-small btn btn-outline-dark btn-sm " >Clean Cart</button>
                </div>
            </div>

        );
    }
}



const ProfileForm = compose(
    withRouter,
    withFirebase,
)(ProfileFormBase);

export default withAuthorization(authCondition)(CheckoutPage);

export { ProfileForm };