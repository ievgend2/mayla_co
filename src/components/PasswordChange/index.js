import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return (
            <div><h3 className="mt-3">Reset password now:</h3>
                <form onSubmit={this.onSubmit} className="d-flex  mr-2">
                    <input
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="New Password"
                        className="mr-2"
                    />
                    <input
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm New Password"
                        className="mr-2"
                    />
                    <Button variant="outline-dark" disabled={isInvalid} type="submit">
                        Reset My Password
        </Button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
        );
    }
}

export default withFirebase(PasswordChangeForm);