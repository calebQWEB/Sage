import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        value: ''
    },
    reducers: {
        setQuote: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
