
import {createStore} from 'redux';
import combinedReducers from '../reducers/index';
import middleware from '../middleware/index';

const store = createStore(combinedReducers, middleware);

export default store;