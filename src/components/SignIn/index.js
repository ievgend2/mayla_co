import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <div className="text-center">
        <h1 >Sign In</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    guestEmail: "guest@gmail.com",
    guestPassword: "guestguest"
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    logInGuest = (guestEmail, guestPassword) => {


        this.props.firebase
            .doSignInWithEmailAndPassword(guestEmail, guestPassword)
            .then(() => {
                this.props.history.push(ROUTES.HOME);
            })
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error, guestEmail, guestPassword } = this.state;

        const isInvalid = password === '' || email === '';

        return (

            <Form onSubmit={this.onSubmit} className="container overflow-hidden">
                <div className="row justify-content-sm-center g-2">
                    {/* <Form.Row > */}

                    {/* <Form.Group as={Col} controlId="formGridEmail" className="col-sm-6"> */}
                    <Form.Control
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                        className="col-sm-6 col-md-4 ml-1 mr-1 mb-2"

                    />
                    {/* </Form.Group> */}
                    {/* <Form.Group as={Col} controlId="formGridPassword" className="col-sm-6"> */}
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                        className="col-sm-6 col-md-4 ml-1 mr-1 mb-2"
                    />
                    {/* </Form.Group> */}
                    {/* </Form.Row> */}
                </div>

                {/* <div className="" style={{ margin: "auto" }}> */}
                <div className="row g-2 justify-content-sm-center">
                    <Button disabled={isInvalid} type="submit" className="col-sm-6 col-md-4  ml-1 mr-1 mb-2"
                        variant="outline-dark">
                        Sign In
        </Button>

                    <Button type="submit" className="col-sm-6 col-md-4  ml-1 mr-1 mb-2"
                        variant="outline-dark" onClick={() => this.logInGuest(guestEmail, guestPassword)}>
                        Continue as guest
        </Button>
                </div>




                { error && <p>{error.message}</p>}
                {/* </div> */}
            </Form>


        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };