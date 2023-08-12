import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    changeDialog: (state, action) => {
      return (state = action.payload);
    }
  }
});

export default dialogSlice.reducer;
export const { changeDialog } = dialogSlice.actions;
