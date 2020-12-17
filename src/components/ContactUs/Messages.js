import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'

const Messages = () => (
    <div>


        <h2 >Message History:</h2>
        <div>
            <MessageBase />
        </div>
        <Link to={ROUTES.CONTACTUS}>Go back to Contact Us</Link>
    </div>
);

class Message extends Component {
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
    };

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.messages().on('value', snapshot => {
            const messageObject = snapshot.val();
            if (messageObject) {
                console.log(messageObject)
                const messageList = Object.keys(messageObject).filter
                    (userMessages => messageObject[userMessages].userId === JSON.parse
                        (localStorage.getItem('authUser')).uid).map(key => ({
                            ...messageObject[key],
                            uid: key,
                        }));

                this.setState({ messages: messageList, loading: false });
            } else {
                this.setState({ messages: null, loading: false });
            }
            console.log(this.state.messages)
        });
    }

    componentWillUnmount() {
        this.props.firebase.messages().off();
    }

    render() {
        const { messages, loading } = this.state;

        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>{loading && <div>Loading ...</div>}
                        {messages ? (
                            <MessageList messages={messages} />
                        ) : (
                                <div>There are no messages ...</div>
                            )}
                    </div>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const MessageList = ({ messages }) => (
    <ul>
        {messages.map(message => (
            <MessageItem key={message.uid} message={message} />
        ))}
    </ul>
);

const MessageItem = ({ message }) => {
    const createdAt = new Date(message.createdAt);
    return (
        <li>
            <strong>{message.name} {message.last_name}</strong> <br />
            Time: {createdAt.toLocaleString()}<br />Message: {message.text}
        </li>
    );
};

const condition = authUser => !!authUser;

const MessageBase = compose(
    withRouter,
    withFirebase,
)(Message);





export default compose(
    // withEmailVerification,
    withAuthorization(condition)(Messages));
export { MessageBase };




// const SubPage = () => (
//     <div className="subPage">
//         <h2 >Message History.</h2>
//         <div>
//             Messages go here

// </div>
//         <Link to={ROUTES.CONTACTUS}>Contact Us</Link>

//     </div>
// );
// export default SubPage;
