// store/reducers/lectureSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lecture: null
};

const lectureSlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {
    setLecture(state, action) {
      state.lecture = action.payload;
    },
    removeLecture(state){
      state.lecture = null
    }
    // Add other actions here as needed
  },
});

export const { setLecture, removeLecture } = lectureSlice.actions;
export default lectureSlice.reducer;
