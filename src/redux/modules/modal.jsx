import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      return (state = action.payload);
    }
  }
});

export default modalSlice.reducer;
export const { showModal, notShowModal } = modalSlice.actions;
