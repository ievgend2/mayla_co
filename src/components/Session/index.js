import React from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

const Session = () => (
    <div>
        <h1>Session</h1>
    </div>
);

export default Session;

export { AuthUserContext, withAuthentication, withAuthorization };


