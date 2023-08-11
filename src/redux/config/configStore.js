import { configureStore } from '@reduxjs/toolkit';
import animalSlice from '../modules/animalSlice';

const store = configureStore({
  reducer: {
    sido: animalSlice
  }
});

export default store;
