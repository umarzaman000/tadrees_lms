// store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import lectureReducer from './lectureSlice';

const rootReducer = combineReducers({
  lectureReducer,
});

export default rootReducer;