import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

import thunk from 'redux-thunk';

import { applyMiddleware, compose, combineReducers, createStore } from 'redux'

import userReducer from './Reducers/userReducer';
import repoReducer from './Reducers/repoReducer';

//import store from './Store/index';

const allReducers = combineReducers({
    user: userReducer,
    repo: repoReducer
});

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





ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
