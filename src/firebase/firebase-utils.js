import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Set the config
const config = {
  apiKey: "AIzaSyAoWecV5gNaLAS4rmyqdeffebbfGdLhBWU",
  authDomain: "crwn-db-c258f.firebaseapp.com",
  databaseURL: "https://crwn-db-c258f.firebaseio.com",
  projectId: "crwn-db-c258f",
  storageBucket: "crwn-db-c258f.appspot.com",
  messagingSenderId: "246306479668",
  appId: "1:246306479668:web:1534c1891becc8b5cdf461",
  measurementId: "G-570D3H2HXQ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAT = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAT,
        ...additionalData
      })
    } catch (error) {
      console.log(`An error occured while creating user: ${error}`);
    }
  }
  return userRef;
}

// Initialize firebase
firebase.initializeApp(config);

// Set the firebase auth method
export const auth = firebase.auth();

// Set the firebase firestore method
export const firestore = firebase.firestore();

// Set up google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export the default firebase
export default firebase;
