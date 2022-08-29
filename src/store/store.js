import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import themeReducer from './themeSlice';
import authReducer from './authSlice';
export const store = configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});
