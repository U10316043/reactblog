import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store/config'
import App from './components/App';
import Maindir from './components/Maindir';
import Testbootstrap from './components/Testbootstrap';
import Signup from './components/Signup';
import Home from './components/Home';
// import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={Maindir} >
        <IndexRoute component={App}/>
        <Route path="test" component={Testbootstrap}/>
        <Route path="af" component={Signup}/>
        <Route path="home" component={Home}/>     
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();


