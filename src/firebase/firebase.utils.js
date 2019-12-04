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

export const createUserProfileDoc = async (userAuth, moreData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log("Snapshot generated");

    if (snapShot.exists === false) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...moreData
            });
            console.log("User added")
        }
        catch (err) {
            console.log("Error!!!")
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

