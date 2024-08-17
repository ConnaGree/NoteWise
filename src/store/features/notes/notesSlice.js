import { createSlice } from "@reduxjs/toolkit";

// Date formatter
export function formatDate(date) {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

// Parse a date string like "13 Aug 2024" into a Date object
export function parseDateString(dateString) {
  const [day, month, year] = dateString.split(" ");
  return new Date(`${day} ${month} ${year}`);
}

// Load Data from the local storage
const loadDataFromLocalStorage = () => {
  try {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.log("Failed to get data", error);
    return [];
  }
};

// Save data to local storage
const saveDataToLocalStorage = (notes) => {
  try {
    localStorage.setItem("notes", JSON.stringify(notes));
  } catch (error) {
    console.log("Failed to save data", error);
  }
};

// Initial State
const initialState = {
  notes: loadDataFromLocalStorage(),
  editorOpen: false,
  filteredNotes: loadDataFromLocalStorage(),
  searchResults: loadDataFromLocalStorage(),
  trashedNotes: [],
  inputFocus: false,
  searchQuery: ''
};

// Note slice
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
      const newPost = {
        ...action.payload,
        id: Math.floor(Math.random() * 1000),
      };
      state.notes.unshift(newPost);
      state.editorOpen = false;
      saveDataToLocalStorage(state.notes);
    },
    removeNote: (state, action) => {
      const updatedNotes = state.filteredNotes.filter(
        (note) => note.id != action.payload.id
      );
      state.filteredNotes = updatedNotes
      saveDataToLocalStorage(state.notes);
      state.trashedNotes.push(action.payload)
    },
    filterNoteByDate: (state, action) => {
      const today = new Date();
      const startOfToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      const startOfWeek = new Date(today);
      console.log(startOfWeek.setDate(today.getDate() - today.getDay() + 1)); // Start of this week (Monday)

      console.log(startOfWeek)
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      let filteredNotesByDate = [];

      switch (action.payload) {
        case "Today":
          filteredNotesByDate = state.notes.filter((note) => {
            const noteDate = parseDateString(note.date);
            return noteDate >= startOfToday;
          });
          break;
        case "This week":
          filteredNotesByDate = state.notes.filter((note) => {
            const noteDate = parseDateString(note.date);
            return noteDate >= startOfWeek && noteDate < startOfToday;
          });
          break;
        case "This month":
          filteredNotesByDate = state.notes.filter((note) => {
            const noteDate = parseDateString(note.date);
            return noteDate >= startOfMonth && noteDate < startOfWeek;
          });
          break;
        case "Older":
          filteredNotesByDate = state.notes.filter((note) => {
            const noteDate = parseDateString(note.date);
            return noteDate < startOfMonth;
          });
          break;
        default:
          filteredNotesByDate = state.notes;
          break;
      }

      state.filteredNotes = filteredNotesByDate;
      console.log(state.filteredNotes);
    },

    searchNoteByTitle: (state, action) => {

      if (action.payload === '') return
      const searchedItems = state.filteredNotes.filter(note => note.content.title.toLowerCase().includes(action.payload.toLowerCase()))
      console.log(searchedItems)
      state.searchResults = searchedItems
    },

    getSearchQuery: (state, action) => {
      state.searchQuery = action.payload
      if (action.payload === '') {
        state.searchResults = loadDataFromLocalStorage()
      }
    },

    updateInputFocusStatus: (state, action) => {
      state.inputFocus = action.payload
    }
  },
});


export const searchKey = (state) => state.notes.searchQuery
export const inputFocusStatus = (state) => state.notes.inputFocus
export const trashedNotes = (state) => state.notes.trashedNotes;
export const filteredNotes = (state) => state.notes.filteredNotes;
export const searchedItems = (state) => state.notes.searchResults
export const selectNoteById = (state, id) =>
  state.notes.notes.filter((note) => note.id === Number(id));
export const allNotes = (state) => state.notes.notes;
export const editorStatus = (state) => state.notes.editorOpen;
export const {
  addPost,
  openEditor,
  closeEditor,
  removeNote,
  filterNoteByDate,
  searchNoteByTitle,
  updateInputFocusStatus,
  getSearchQuery
} = notesSlice.actions;
export default notesSlice.reducer;
