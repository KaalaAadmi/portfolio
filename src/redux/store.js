// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Make sure you have a combined reducer

const store = createStore(rootReducer);

export default store;
