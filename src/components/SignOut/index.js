import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button className="sign_out_b" type="button" onClick={firebase.doSignOut}>
        <Link to={ROUTES.LANDING}>Sign Out</Link>
    </button>
);

export default withFirebase(SignOutButton);



