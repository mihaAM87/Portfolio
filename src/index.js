import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import contentReducer from './store/reducers/content'
import {Provider} from 'react-redux'
import rootReducer from './store/rootReducer'
import reduxThunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = store => next => action => {

  let colorInterval = store.getState().colorInterval;
  let counter = {value: store.getState().counter}; 

  if (!colorInterval || typeof counter.value != "number") {
    counter.value = 0;
    colorInterval = setInterval(() => ++counter.value, 1000)
  }

  // const result = 
  next({...action, colorInterval: colorInterval, counter: counter});
  
  // return result
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware, reduxThunk
)))

window.store = store

// var cors = require('cors')

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  
)

ReactDOM.render(app, document.getElementById('root'))
