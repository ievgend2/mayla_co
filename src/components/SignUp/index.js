import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1 className="text-center">SignUp Form:</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  name:'',
  address: '',
  city:'',
  state:'',
  zip:'',
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, cart, name, address, city, state, zip, uid} = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            name, 
            address, 
            city, 
            state,
            zip,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      // <div className="container text-center mt-3">
      <div>
      <Form onSubmit={this.onSubmit} className="container">
      <Form.Row>
      <Form.Group as={Col} controlId="formGridUsername">
      <Form.Control
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Username"
          className=""
        />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Control 
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          className=""

        />
        </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          className=""

        />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Control
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          className=""

        />
        </Form.Group>
        </Form.Row>
        <div className="text-center d-flex ">
        <button className="btn btn-dark w-25 " disabled={isInvalid} type="submit" style={{ margin: "auto" }}>
          Sign Up
        </button>
</div>
        {error && <p>{error.message}</p>}
      </Form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };