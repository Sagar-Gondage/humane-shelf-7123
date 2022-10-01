// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAL-eKzBwy_c4GONDwRW0SWdfPuUtl5VFY",
//   authDomain: "mg-clone-867ec.firebaseapp.com",
//   projectId: "mg-clone-867ec",
//   storageBucket: "mg-clone-867ec.appspot.com",
//   messagingSenderId: "682570336109",
//   appId: "1:682570336109:web:e200230bf22565b7b07c64"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // Initialize Firebase Auth
// const auth = getAuth();

// export { auth };


// Ravi :

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
 
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth();

export { auth };

