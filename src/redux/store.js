import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'; //Middleware

import rootReducer from './root-reducer';

//SETUP MIDDLEWARES

const middlewares = [logger]; //Because we willl use many middlewares and now we can pass it in directlyand as react is expectng array as middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;



