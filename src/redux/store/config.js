import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducers/index'
import {Field, reduxForm} from 'redux-form'
const store = createStore(
    combineReducer, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store;