import { configureStore } from '@reduxjs/toolkit';
import quote from '../features/quote/quoteSlice';
import account from '../features/account/accountSlice';


export const store = configureStore({
  reducer: {
    quote, account
  }  
});