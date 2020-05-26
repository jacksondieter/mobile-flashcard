import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {decks} from '../utils/_DATA';

function configureStore() {
    return createStore(reducer, {}, applyMiddleware(thunk, logger));
}

const store = configureStore();
export default store;