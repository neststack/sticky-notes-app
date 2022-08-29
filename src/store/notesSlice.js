import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [
    {
      id: 1,
      color: 'blue',
      text: 'This is a sample note',
      time: 1511129161400,
    },
    {
      id: 2,
      color: 'yellow',
      text: 'This is a another note',
      time: 1513129158900,
    },
    {
      id: 3,
      color: 'green',
      text: 'This is a another note',
      time: 1515129853500,
    },
    {
      id: 4,
      color: 'pink',
      text: 'This is a another note',
      time: 1517211811670,
    },
    {
      id: 5,
      color: 'purple',
      text: 'This is a another note',
      time: 1519211810362,
    },
  ],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    removeNote: (state, action) => {
      const itemId = action.payload;
      state.notes = state.notes.filter((item) => item.id !== itemId);
    },
    updateNote: (state, { payload }) => {
      const notesItem = state.notes.find((item) => item.id === payload.id);
      notesItem.text = payload.text;
      notesItem.time = payload.time;
    },
  },
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
