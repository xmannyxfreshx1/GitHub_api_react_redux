import { createStore} from 'redux';
import allReducers from '../Reducers/allReducers';
import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()

);

const store = createStore(
    allReducers,
    {
        user: null,
        repo: null
    },
    allStoreEnhancers
);

export default store;



/*

This is the old store structure.

import rootReducer from '../Reducers/index.js';

const store = createStore(rootReducer);

console.log(store.getState());

export default store;*/