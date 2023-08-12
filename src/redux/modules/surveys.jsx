import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const surveysSlice = createSlice({
  name: 'surveys',
  initialState,
  reducers: {
    addSurveys: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export default surveysSlice.reducer;
export const { addSurveys } = surveysSlice.actions;
