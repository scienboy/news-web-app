// import ../index.css

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { store } from "./app/store";
import reportWebVitals from './reportWebVitals';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG1cIiZhG8Cv75N6wdpqEfp8PUZPdgduA",
  authDomain: "news-web-app-a37cf.firebaseapp.com",
  projectId: "news-web-app-a37cf",
  storageBucket: "news-web-app-a37cf.appspot.com",
  messagingSenderId: "497621909834",
  appId: "1:497621909834:web:8d93e9bf5eefa7ce6801b3",
  measurementId: "G-187ZXR3FLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
