import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ sido: '6260000' }];

const animalSlice = createSlice({
  name: 'animalApiData',
  initialState,
  reducers: {
    setSido: (state, action) => {
      return state.sido === action.payload;
    }
  }
});

export default animalSlice.reducer;
export const { setSido } = animalSlice.actions;
