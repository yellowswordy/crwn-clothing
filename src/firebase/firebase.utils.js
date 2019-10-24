import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyADiyu4i6VSd7wmxxtZJuEh202Nva39IUk",
    authDomain: "crwn-db-f41a6.firebaseapp.com",
    databaseURL: "https://crwn-db-f41a6.firebaseio.com",
    projectId: "crwn-db-f41a6",
    storageBucket: "crwn-db-f41a6.appspot.com",
    messagingSenderId: "336462417537",
    appId: "1:336462417537:web:393d9396562fe48c7a0780"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef, 'userRef obj')
    const snapShot = await userRef.get();
    console.log(snapShot.exists);
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }


    }
    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
