import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const Notes = () => {
  const { notes } = useSelector((store) => store.notes);

  return (
    <div className='mt-[10vh] flex justify-center'>
      <ul className='list-none flex flex-row flex-wrap justify-center p-5'>
        {notes.map((note) => (
          <li key={note.id}>
            <Note {...note} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
