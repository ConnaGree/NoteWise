import { createSlice } from "@reduxjs/toolkit";

const loadDataFromLocalStorage = () => {
    try {
      const notes = localStorage.getItem("favorites");
      return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.log("Failed to get data", error);
        return []
    }
}

const saveDataToLocalStorage = (notes) => {
    try {
      localStorage.setItem("favorites", JSON.stringify(notes));
    } catch (error) {
        console.log("Failed to save data", error);
    }
}

const initialState = {
    favorites: loadDataFromLocalStorage()
}


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const favNote = action.payload
            state.favorites.unshift(favNote)
            saveDataToLocalStorage(state.favorites)
        }
    }
})


export const allFavNotes = state => state.favorites.favorites
export const {addToFav} = favoritesSlice.actions
export default favoritesSlice.reducer