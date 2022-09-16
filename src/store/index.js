
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

var createHistory = require("history").createBrowserHistory;

const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = configureStore(
    { reducer: rootReducer }, composeEnhancers(applyMiddleware(...middlewares))
);

export { store, history };
