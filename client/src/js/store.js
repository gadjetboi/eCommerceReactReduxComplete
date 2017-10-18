import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux';


import reducers from './reducers';

export const browserHistory = createHistory();

const middleware = applyMiddleware(promise(), thunk, createLogger(), routerMiddleware(browserHistory));

//TODO: create default state { categoryReducer: {} }

const store = createStore(reducers, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;