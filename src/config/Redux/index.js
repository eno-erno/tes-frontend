import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
export * from './ProductReducer/actionType';

const store = createStore(reducer, applyMiddleware(thunk));

export {store};