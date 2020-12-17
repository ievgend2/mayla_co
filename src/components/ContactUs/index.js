import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';



const ContactUsPage = () => (
    <div>
        <ContactUsForm />
    </div>
);


class ContactUsFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            last_name: '',
            email: '',
            text: '',
            error: null,
            loading: false,
            userId: '',
            messages: []
        }

    }

    onCreateMessage = (event, authUser) => {

        this.props.firebase.messages().push({
            userId: authUser.uid,
            name: this.state.name,
            last_name: this.state.last_name,
            email: this.state.email,
            text: this.state.text,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,

        });
        this.setState({ text: '' });
        console.log({ [event.target.name]: event.target.value })
        event.preventDefault();
        this.props.history.push(ROUTES.SUBPAGE);
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log({ [event.target.name]: event.target.value })
    };





    render() {
        const { name, last_name, email, text, error, messages, loading } = this.state;
        const isInvalid = name === '' || last_name === '' || email === '' || text === '';
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <div className="text-center">
                        <Form onSubmit={event => this.onCreateMessage(event, authUser)} className="contactUsForm">
                            <h1>Contact Us</h1>
                            <Row>
                                <Col>
                                    <Form.Control
                                        name="name"
                                        value={name}
                                        onChange={this.onChange}
                                        placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control
                                        name="last_name"
                                        value={last_name}
                                        onChange={this.onChange}
                                        placeholder="Last name" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mt-2">
                                    <Form.Control
                                        name="email"
                                        value={email}
                                        type="email"
                                        onChange={this.onChange}
                                        placeholder="Enter email" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mt-2">
                                    <Form.Control
                                        name="text"
                                        value={text}
                                        onChange={this.onChange}
                                        placeholder="Message"
                                        as="textarea"
                                        rows={3} />
                                </Col>
                            </Row>
                            <div className="text-center ">
                                <Button
                                    type="submit"
                                    disabled={isInvalid}
                                    className="sendEmail mt-2 "
                                    variant="outline-dark">Send Email</Button>
                            </div>
                            {error && <p>{error.message}</p>}
                        </Form>
                    </div>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const ContactUsForm = compose(
    withRouter,
    withFirebase,
)(ContactUsFormBase);

export default ContactUsPage;
