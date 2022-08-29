import { createSlice } from '@reduxjs/toolkit';

const body = document.querySelector('body');

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) body.classList.add('dark');
      if (!state.darkMode) body.classList.remove('dark');
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
