import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { addNote } from '../store/notesSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddNotes = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative w-[56px] h-[56px]'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='absolute rounded-full p-[16px] shadow-gray-600 dark:shadow-black/70 shadow-lg hover:shadow-xl hover:shadow-gray-600 bg-white text-black z-20 '
      >
        <BsPlusLg
          className={`w-[24px] h-[24px] ease-in-out duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div
        className={`absolute top-[50%] left-[0%] mx-[2px] w-[52px] bg-white shadow-gray-600 dark:shadow-black/70 shadow-lg z-10 flex flex-col justify-center items-center rounded-2xl duration-100 ease-in-out ${
          isOpen ? 'pt-[42px] pb-[12px]' : 'h-0'
        }`}
      >
        <button
          onClick={() => {
            dispatch(
              addNote({
                id: uuidv4(),
                color: 'blue',
                text: '',
                time: Date.now(),
              })
            );
            window.scrollTo(0, 0);
            setIsOpen(false);
          }}
          className='w-[46px] h-[46px] my-[8px] rounded-full bg-blue-400 shadow-md shadow-gray-500'
        ></button>
        <button
          onClick={() => {
            dispatch(
              addNote({
                id: uuidv4(),
                color: 'yellow',
                text: '',
                time: Date.now(),
              })
            );
            setIsOpen(false);
          }}
          className='w-[46px] h-[46px] my-[8px] rounded-full bg-yellow-400 shadow-md shadow-gray-500'
        ></button>
        <button
          onClick={() => {
            dispatch(
              addNote({
                id: uuidv4(),
                color: 'green',
                text: '',
                time: Date.now(),
              })
            );
            setIsOpen(false);
          }}
          className='w-[46px] h-[46px] my-[8px] rounded-full bg-green-400 shadow-md shadow-gray-500'
        ></button>
        <button
          onClick={() => {
            dispatch(
              addNote({
                id: uuidv4(),
                color: 'pink',
                text: '',
                time: Date.now(),
              })
            );
            setIsOpen(false);
          }}
          className='w-[46px] h-[46px] my-[8px] rounded-full bg-pink-400 shadow-md shadow-gray-500'
        ></button>
        <button
          onClick={() => {
            dispatch(
              addNote({
                id: uuidv4(),
                color: 'purple',
                text: '',
                time: Date.now(),
              })
            );
            setIsOpen(false);
          }}
          className='w-[46px] h-[46px] my-[8px] rounded-full bg-purple-400 shadow-md shadow-gray-500'
        ></button>
      </div>
    </div>
  );
};

export default AddNotes;
