// reducers/index.js
import { combineReducers } from 'redux';
import osReducer from './osReducer'; // Create this reducer

const rootReducer = combineReducers({
  os: osReducer,
  // Add other reducers here if needed
});

export default rootReducer;
