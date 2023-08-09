import { configureStore } from '@reduxjs/toolkit';
import lists from '../modules/lists';

const store = configureStore({
  reducer: {
    lists
  }
});

export default store;
