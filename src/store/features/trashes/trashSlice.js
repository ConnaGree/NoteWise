import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trashedNotes: [],
};

const trashSlice = createSlice({
  name: "trash",
  initialState,
  reducers: {},
});

export const {} = trashSlice.actions;
export default trashSlice.reducer;
