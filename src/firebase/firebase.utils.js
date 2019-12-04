import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAEC1jlJkeGMsGvoCZgBjSp2ECP-Oq8DKQ",
    authDomain: "vkd-kart.firebaseapp.com",
    databaseURL: "https://vkd-kart.firebaseio.com",
    projectId: "vkd-kart",
    storageBucket: "vkd-kart.appspot.com",
    messagingSenderId: "732634600773",
    appId: "1:732634600773:web:2f0b92e5802f5b5809da2c",
    measurementId: "G-SW56CLZFH7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

