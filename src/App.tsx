import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics , logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvYE3vQcjASXqda_tCzKuCSiQc1zKg_tw",
  authDomain: "fir-learning-a5fa6.firebaseapp.com",
  projectId: "fir-learning-a5fa6",
  storageBucket: "fir-learning-a5fa6.firebasestorage.app",
  messagingSenderId: "116440281900",
  appId: "1:116440281900:web:61308fb299f3a6d0a2f289",
  measurementId: "G-CX1RYR6FH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const loginClickHandler = () => {
  console.log('Login button clicked');
  // login api call here 
  logEvent(analytics, 'login', {
    method: 'email'
  });
}

const signupClickHandler = () => {
  console.log('Signup button clicked');
  // signup api call here
  logEvent(analytics, 'sign_up', {
    method: 'email'
  });
}

function App() {
  return (
    <div className="App">
      <div className="btn-container">
        <button className="btn" onClick={loginClickHandler}> Login</button>
        <button className="btn" onClick={signupClickHandler}> Signup</button>
      </div>
    </div>
  );
}

export default App;
