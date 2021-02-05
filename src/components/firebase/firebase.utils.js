import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyArcXIAFQfY-jbFKFUK1p9mkp_BKg2OVCM",
	authDomain: "crwn-db-1e4ac.firebaseapp.com",
	projectId: "crwn-db-1e4ac",
	storageBucket: "crwn-db-1e4ac.appspot.com",
	messagingSenderId: "132378466303",
	appId: "1:132378466303:web:18810ac6bcf3bddef639ca",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
