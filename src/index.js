import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import Counter from './Counter';
import counter from './reducer';
import App from './App';
import './index.css';
const store = createStore(counter);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from "react-redux";
// import counter from './reducer';
// import App from './App';
// import './index.css';

// var destination = document.querySelector('#container'); 

// // Store
// var store = createStore(counter);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     destination
// );