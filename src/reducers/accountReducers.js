import { DEPOSIT, WITHDRAW } from '../actions/accountActions';

export const accountReducer = (state = { balance: 0 }, action) => {
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload };
        case WITHDRAW:
            return { ...state, balance: state.balance - action.payload >= 0 ? state.balance - action.payload : state.balance };
        default:
            return state;
    }
};