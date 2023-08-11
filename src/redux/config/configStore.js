import { configureStore } from '@reduxjs/toolkit';
import modal from '../modules/modal';
import surveys from '../modules/surveys';
import dialog from '../modules/dialog';
import submitSurvey from '../modules/submitSurvey';
import userSlice from '../modules/userSlice';

const store = configureStore({
  reducer: {
    modal,
    surveys,
    dialog,
    submitSurvey,
    user: userSlice
  }
});

export default store;
