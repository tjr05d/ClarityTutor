import { combineReducers } from 'redux';
import * as loginReducer from './login.js';

export default combineReducers(Object.assign(
    loginReducer,
))