import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lecture: null,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLecture(state, action) {
      state.lecture = action.payload;
    },
    removeLecture(state) {
      state.lecture = null;
    },
  },
});
export const { setLecture, removeLecture } = dataSlice.actions;
export default dataSlice.reducer;
