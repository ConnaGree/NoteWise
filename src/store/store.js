import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/notesSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        'notes': notesReducer,
        'favorites': favoritesReducer
    }
})