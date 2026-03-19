import { createStore } from 'redux';
import { accountReducer } from '../reducers/accountReducers';

const initialState = { balance: 0 };

export const store = createStore(accountReducer, initialState);