import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const submitSurveySlice = createSlice({
  name: 'submitSurvey',
  initialState,
  reducers: {
    addSurvey: (state, action) => {
      state.push(action.payload);
    },
    prevSurvey: (state, action) => {
      for (let n of Array(action.payload)) {
        state.pop();
      }
    }
  }
});

export default submitSurveySlice.reducer;
export const { addSurvey, prevSurvey } = submitSurveySlice.actions;
