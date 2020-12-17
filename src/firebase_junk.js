import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// var config = {
//     apiKey: "AIzaSyDmG3L3LQhZ1KQhX6t1b-FjIdmEv1ualZ0",
//     authDomain: "react-firebase-d6dd4.firebaseapp.com",
//     databaseURL: "https://react-firebase-d6dd4.firebaseio.com",
//     projectId: "react-firebase-d6dd4",
//     storageBucket: "react-firebase-d6dd4.appspot.com",
//     messagingSenderId: "694944377444"

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

}

export default Firebase;





