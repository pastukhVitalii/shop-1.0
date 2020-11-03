import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store";
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVZCYdT6UWeI_WZMYZDc6SBASwhu4fSPc",
    authDomain: "fir-shop-ce9f6.firebaseapp.com",
    databaseURL: "https://fir-shop-ce9f6.firebaseio.com",
    projectId: "fir-shop-ce9f6",
    storageBucket: "fir-shop-ce9f6.appspot.com",
    messagingSenderId: "933918109326",
    appId: "1:933918109326:web:04bddbc15a1eb66d6ea3df",
    measurementId: "G-NB9TPTCG8T"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const ref = db.ref();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
