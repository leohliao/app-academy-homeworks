import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


// Phase I: ------------------
// function addLoggingToDispatch (store) {
//   let dispatched = store.dispatch;
//   return function (action) {
//     console.log(store.getState());
//     console.log(action);
//     dispatched(action);
//     console.log(store.getState());
//   };//return function(action)
// }//addLoggingToDispatch
// ---------------------- End Phase I

// Phase II: ------------------
// const addLoggingToDispatch  = store => next => action => {
//       console.log(store.getState());
//       console.log(action);
//       next(action);
//       console.log(store.getState());
// };

// const applyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach((middleware) => {
//     dispatch = middleware(store)(dispatch);
//   });
//     return Object.assign({}, store, { dispatch });
// };
// ---------------------- End Phase II

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  //Phase I:
  // store.dispatch = addLoggingToDispatch(store);
  // ---------------------- End Phase I

  //Phase II:
  //store = applyMiddlewares(store, addLoggingToDispatch);
  // ---------------------- End Phase II

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
