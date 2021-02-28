import {createStore as reduxCreateStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from '.reducers/userReducer';

import {persistReucer,}