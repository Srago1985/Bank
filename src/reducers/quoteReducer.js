import { SET_QUOTE } from '../actions/quoteAction';

const initialState = {
    quote: 'Winter is coming...'
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return { ...state, quote: action.payload };
        default:
            return state;
    }
};