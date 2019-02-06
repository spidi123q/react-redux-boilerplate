import * as firebase from "firebase";

export const config = {
    apiKey: "AIzaSyD4u_xDiHa3i1q2q0ZoeBsI0cyzhRLrIzc",
    authDomain: "l-social-network.firebaseapp.com",
    databaseURL: "https://l-social-network.firebaseio.com",
    projectId: "l-social-network",
    storageBucket: "l-social-network.appspot.com",
    messagingSenderId: "362860495165"
};

firebase.initializeApp(config);

export default firebase;