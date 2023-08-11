import { configureStore } from '@reduxjs/toolkit';
import lists from '../modules/lists';
import modal from '../modules/modal';
import surveys from '../modules/surveys';
import dialog from '../modules/dialog';
import submitSurvey from '../modules/submitSurvey';

const store = configureStore({
  reducer: {
    lists,
    modal,
    surveys,
    dialog,
    submitSurvey
  }
});

export default store;
