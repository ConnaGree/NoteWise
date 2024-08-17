import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Asynchronous thunk action to fetch quotes from an API
export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
    const response = await axios.get('https://type.fit/api/quotes');
    return response.data; // Return the array of quotes from the response data
});

// Initial state for the quotes slice
const initialState = {
    quotes: [],        // Array to hold the fetched quotes
    status: 'idle',    // Status of the fetch operation ('idle', 'loading', 'succeeded', 'failed')
    error: null        // Error message in case of a failed fetch operation
};

// Slice for managing quotes-related state
const quoteSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        // No custom reducers are defined; only async thunks are used
    },
    extraReducers: (builder) => {
        // Handling different states of the fetchQuotes async thunk
        builder
            .addCase(fetchQuotes.pending, (state) => {
                state.status = 'loading'; // Update status to 'loading' when the fetch operation starts
            })
            .addCase(fetchQuotes.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Update status to 'succeeded' when the fetch is successful
                state.quotes = action.payload; // Store the fetched quotes in the state
            })
            .addCase(fetchQuotes.rejected, (state, action) => {
                state.status = 'failed'; // Update status to 'failed' if the fetch operation fails
                state.error = action.error.message; // Store the error message in the state
            });
    }
});

// Selector to get all quotes from the state
export const allQuotes = (state) => state.quotes.quotes;

// Selector to get the error message from the state
export const error = (state) => state.quotes.error;

// Selector to get the status of the fetch operation
export const status = (state) => state.quotes.status;

// Export the reducer to be used in the store
export default quoteSlice.reducer;
