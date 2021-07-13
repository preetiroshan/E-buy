import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA7IX2PcwRC1lK9pIFqKe9NhwqEqFiSHrw",
	authDomain: "book-application-d2cd0.firebaseapp.com",
	projectId: "book-application-d2cd0",
	storageBucket: "book-application-d2cd0.appspot.com",
	messagingSenderId: "281591140072",
	appId: "1:281591140072:web:e28e5969e4d62e0ac3835d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
