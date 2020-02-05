import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger'; //Middleware


import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer';
import rootSaga from './root-saga'

//SETUP MIDDLEWARES
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //Because we willl use many middlewares and now we can pass it in directlyand as react is expectng array as middleware


if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default { store, persistor };



