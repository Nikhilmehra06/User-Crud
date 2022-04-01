import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducer/userReducer';

const store = createStore(userReducer, composeWithDevTools(applyMiddleware()));

export default store;
