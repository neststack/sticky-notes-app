import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { removeNote, updateNote } from '../store/notesSlice';
import { useDispatch } from 'react-redux';

const Note = ({ id, color, text, time }) => {
  const dispatch = useDispatch();
  const [textContent, setTextContent] = useState(text);
  const [counter, setCounter] = useState(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (counter === 0) {
      setCounter(1);
      return;
    }
    const timer = setTimeout(() => {
      const note = {
        id,
        color,
        text: textContent,
        time: Date.now(),
      };
      dispatch(updateNote(note));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [textContent]);

  const noteChangeHandle = (e) => {
    setTextContent(e.target.value);
  };

  const noteDeleteHandle = (id) => {
    dispatch(removeNote(id));
  };

  let headerColorClass, textColorClass;

  switch (color) {
    case 'blue':
      headerColorClass = 'bg-blue-500 dark:bg-blue-700';
      textColorClass = 'bg-blue-400 dark:bg-gray-800';
      break;
    case 'pink':
      headerColorClass = 'bg-pink-500 dark:bg-pink-700';
      textColorClass = 'bg-pink-400 dark:bg-gray-800';
      break;
    case 'yellow':
      headerColorClass = 'bg-yellow-500 dark:bg-yellow-700';
      textColorClass = 'bg-yellow-400 dark:bg-gray-800';
      break;
    case 'green':
      headerColorClass = 'bg-green-500 dark:bg-green-700';
      textColorClass = 'bg-green-400 dark:bg-gray-800';
      break;
    case 'purple':
      headerColorClass = 'bg-purple-500 dark:bg-purple-700';
      textColorClass = 'bg-purple-400 dark:bg-gray-800';
      break;
    default:
      break;
  }

  const event = new Date(time);
  const date = event.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className='m-4'>
      <header
        className={`${headerColorClass} select-none flex justify-between rounded-t-xl`}
      >
        <div className='text-black/30 dark:text-black/80 p-2'>
          {focused ? `(${textContent.length}/200)` : date}
        </div>
        <button className='p-2 text-black' onClick={() => noteDeleteHandle(id)}>
          <MdOutlineClose />
        </button>
      </header>
      <textarea
        className={`${textColorClass} p-2 rounded-b-xl outline-none`}
        name='note'
        rows='5'
        cols='30'
        maxLength='200'
        value={textContent}
        spellCheck='false'
        onChange={noteChangeHandle}
        onFocus={()=>setFocused(true)}
        onBlur={()=>setFocused(false)}
      />
    </div>
  );
};

export default Note;
