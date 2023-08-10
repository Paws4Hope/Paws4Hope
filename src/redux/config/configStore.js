import { configureStore } from '@reduxjs/toolkit';
import lists from '../modules/lists';
import animalSlice from '../modules/animalSlice';

const store = configureStore({
  reducer: {
    lists,
    sido: animalSlice
  }
});

export default store;
