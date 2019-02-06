import firebase from '../utils/firebase'

export const login = async (provider) => {
    try {
        let result = await firebase.auth().signInWithPopup(provider);
        return result.user;
    } catch(err) {
        console.log(err);
    }
    
}

export const googleLogin = async () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return login(provider)
}