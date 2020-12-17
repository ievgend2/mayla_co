import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import { Form, Col, Button } from 'react-bootstrap'
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';


const states = [
    "Choose...", "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT",
    "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID",
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH",
    "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE",
    "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP",
    "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA",
    "WV", "WI", "WY"];

// comments

const AccountPage = () => (
    <AuthUserContext.Consumer>

        {authUser => (
            <div className="">
                <h1 className="text-center">Profile Information, {authUser.name}:</h1>
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
                address2: userObject.address2,
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

    //create all the State options from the State array
    stateList = states.map((state, index) => (
        <option key={index}>{state}</option>
    ));



    onSubmit = event => {
        const user = this.props.firebase.auth?.currentUser;
        this.props.firebase.user(user.uid).update({

            address: this.state.address,
            address2: this.state.address2,
            city: this.state.city,
            email: this.state.email,
            name: this.state.name,
            state: this.state.state,
            username: this.state.username,
            zip: this.state.zip,

        });
        event.preventDefault();
        alert("Your profile was updated successfully!")

    };



    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log({ [event.target.name]: event.target.value })
    };

    render() {
        const { name, username, address, address2, city, email, state, zip } = this.state;

        return (
            <div>
                <Form onSubmit={event => this.onSubmit(event)} className="container">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                name="name"
                                onChange={this.onChange}
                                placeholder="First & Last Name"
                                defaultValue={name} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                onChange={this.onChange}
                                placeholder="Username"
                                defaultValue={username} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            onChange={this.onChange}
                            placeholder="Email"
                            defaultValue={email} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            name="address"
                            onChange={this.onChange}
                            placeholder="Street Name & Number"
                            defaultValue={address} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                            name="address2"
                            onChange={this.onChange}
                            placeholder="Apartment, studio, or floor"
                            defaultValue={address2}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="city"
                                onChange={this.onChange}
                                placeholder="City"
                                value={city} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                name="state"
                                onChange={this.onChange}
                                value={state}
                                as="select">
                                {this.stateList}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                name="zip"
                                onChange={this.onChange}
                                placeholder="Zip code"
                                value={zip} />
                        </Form.Group>
                    </Form.Row>
                    <div className="d-flex justify-content-between mt-2">
                        <Button variant="outline-dark" className="mb-2 w-25 p-2">
                            <Link className="" to={ROUTES.MESSAGES}>Message History</Link>

                        </Button>
                        <Button variant="outline-dark" className="mb-2 w-40 p-2" >
                            <Link to={ROUTES.EDIT_INFO}>Reset Password</Link><br />

                        </Button>
                        <Button variant="outline-dark" className="mb-2 w-40 p-2" >
                            <Link to={ROUTES.CHECKOUT}>Checkout</Link><br />

                        </Button>
                        <Button variant="outline-dark" className="mb-2 w-25 p-2" type="submit">
                            Submit
                    </Button>


                    </div>

                </Form>
            </div>
        );
    }
}


const ProfileForm = compose(
    withRouter,
    withFirebase,
)(ProfileFormBase);

export default withAuthorization(authCondition)(AccountPage);

export { ProfileForm };

