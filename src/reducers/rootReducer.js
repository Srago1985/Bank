import { accountReducer } from "./accountReducers";
import { combineReducers } from "redux";
import { quoteReducer } from "./quoteReducer";

export const rootReducer = combineReducers({
    account: accountReducer,
    quote: quoteReducer,
});