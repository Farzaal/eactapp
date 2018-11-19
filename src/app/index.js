import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Header } from './components/Header';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/rootReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(...[logger, sagaMiddleware]));
render(<Provider store={store}><Header /></Provider>, document.getElementById('root'));