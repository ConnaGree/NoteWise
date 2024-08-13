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
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      state.notes = updatedNotes;
      saveDataToLocalStorage(state.notes);
    },
    filterNoteByDate: (state, action) => {
      const today = new Date();
      const startOfToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Start of this week (Monday)
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
  },
});

export const filteredNotes = (state) => state.notes.filteredNotes;
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
} = notesSlice.actions;
export default notesSlice.reducer;
