import { createSlice } from "@reduxjs/toolkit";


const loadDataFromLocalStorage = () => {
    try {
      const notes = localStorage.getItem("notes");
      return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.log("Failed to get data", error);
        return []
    }
}

const saveDataToLocalStorage = (notes) => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
        console.log("Failed to save data", error);
    }
}

const initialState = {
  notes: loadDataFromLocalStorage(),
  editorOpen: false
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    openEditor: (state) => {
      state.editorOpen = true;
    },
    closeEditor: (state) => {
      state.editorOpen = false;
    },
    addPost: (state, action) => {
      const newPost = { ...action.payload, id: Math.floor(Math.random() * 1000) };
      state.notes.unshift(newPost);
      state.editorOpen = false;
      saveDataToLocalStorage(state.notes);
    },
    removeNote: (state, action) => {
        const updatedNotes = state.notes.filter(note => note.id !== action.payload.id)
        state.notes = updatedNotes
        saveDataToLocalStorage(state.notes)
    }
  },
});


export const allNotes = (state) => state.notes.notes
export const editorStatus = (state) => state.notes.editorOpen
export const { addPost, openEditor, closeEditor, removeNote } = notesSlice.actions;
export default notesSlice.reducer;