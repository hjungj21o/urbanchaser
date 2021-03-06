import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJt8ukc0Oc4nAaeHX8jTRMXMvGaWecpGw",
    authDomain: "urban-chaser.firebaseapp.com",
    databaseURL: "https://urban-chaser.firebaseio.com",
    projectId: "urban-chaser",
    storageBucket: "urban-chaser.appspot.com",
    messagingSenderId: "944815903561",
    appId: "1:944815903561:web:7915536c30635514318098",
    measurementId: "G-22CK7FN8MW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {  
            console.olog('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//gives us access to this new Google auth provider class from the auth library
const provider = new firebase.auth.GoogleAuthProvider();

//takes in custom parameters 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
