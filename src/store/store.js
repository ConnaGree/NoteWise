import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/notesSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import quotesReducer from './features/quotes/quoteSlice'

export const store = configureStore({
    reducer: {
        'notes': notesReducer,
        'favorites': favoritesReducer,
        'quotes': quotesReducer
    }
})