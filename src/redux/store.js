import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger'; //Middleware

import rootReducer from './root-reducer';

//SETUP MIDDLEWARES

const middlewares = [logger]; //Because we willl use many middlewares and now we can pass it in directlyand as react is expectng array as middleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export  const persistor = persistStore(store);
export default { store, persistor };



