import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAWWMj2uxqXlxbpw4uBVAVue2m3ManQAko",
	authDomain: "reminder-app-10377.firebaseapp.com",
	projectId: "reminder-app-10377",
	storageBucket: "reminder-app-10377.appspot.com",
	messagingSenderId: "445969353854",
	appId: "1:445969353854:web:e96055c4b7705c3e219c2f",
	measurementId: "G-QS0G78TZQP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
