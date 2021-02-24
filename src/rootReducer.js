import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import demoReducer2 from './demoReducer2'; 
 export default combineReducers({
    demoReducer,
    demoReducer2
  });