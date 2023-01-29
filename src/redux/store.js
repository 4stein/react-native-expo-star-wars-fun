import { configureStore } from '@reduxjs/toolkit';
import listReducer from './reducers/listReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ list: listReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
