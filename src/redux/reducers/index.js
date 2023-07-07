import {combineReducers} from 'redux';
import loginReducer from './authentication/loginReducer';
// import homeReducer from './home/homeReducer';

const rootReducer = combineReducers({
  loginReducer,
  // homeReducer,
});

export default rootReducer;
