// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIXadbrrQBfhjNfJcfc_CsxvMSVWQszuw",
    authDomain: "abdullahportfolio-7ad5a.firebaseapp.com",
    projectId: "abdullahportfolio-7ad5a",
    storageBucket: "abdullahportfolio-7ad5a.appspot.com",
    messagingSenderId: "872204707840",
    appId: "1:872204707840:web:262181f69aab7a6e6e10e5",
    measurementId: "G-S6VNQELX9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app);
// export default auth