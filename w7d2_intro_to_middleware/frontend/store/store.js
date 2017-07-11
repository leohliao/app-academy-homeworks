import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,

    //Phase 3:
    applyMiddleware(addLoggingToDispatch, bonusPoints)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};


//Phase 3:
const addLoggingToDispatch  = store => next => action => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};
// ------------------- End Phase 3


//Bonus :
const bonusPoints  = store => next => action => {
  console.log("Bonus in the following:");
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};
// ------------------- End Bonus


export default configureStore;
