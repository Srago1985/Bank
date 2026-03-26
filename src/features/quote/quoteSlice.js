import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: "Winter is coming...",
    reducers: {
    setQuote: (state, action) => action.payload,
    },
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;