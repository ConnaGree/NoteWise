import { createSlice } from "@reduxjs/toolkit";


// Date formatter
function formatDate(date) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}


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
  editorOpen: false,
  filteredNotes: loadDataFromLocalStorage()
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
    },
    filterNoteByDate: (state) => {
      const filteredNotes = state.notes.filter(note => note.date === formatDate(new Date()))
      state.filteredNotes = filteredNotes
    }
  },
});

export const selectNoteById = (state, id) => state.notes.notes.filter(note => note.id === Number(id))
export const allNotes = (state) => state.notes.notes
export const editorStatus = (state) => state.notes.editorOpen
export const { addPost, openEditor, closeEditor, removeNote, getNote } = notesSlice.actions;
export default notesSlice.reducer;