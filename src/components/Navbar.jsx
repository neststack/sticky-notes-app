import React from 'react';
import AddNotes from './AddNotes';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <header className='font-poppins flex-nowrap flex-row bg-white dark:bg-slate-600 border-b-2 border-gray-200 flex justify-between items-center fixed top-0 left-0 w-full h-[10%]'>
      <div className='flex-1 flex p-4 items-center justify-start'>
        <AddNotes />
      </div>
      <div className='flex-1 flex items-center p-4 justify-center'>
        <h1 className='text-4xl'>Notes</h1>
      </div>
      <div className='flex-1 flex items-center p-4 justify-end'>
        <button onClick={() => dispatch(toggleTheme())} className='bg-sky-500 w-[50px] h-[30px] dark:bg-slate-900 rounded-full duration-200 ease-in-out relative'>
          <div className='absolute top-[2px] left-[0px] dark:left-[20px] bg-white mx-[2px] w-[26px] h-[26px] rounded-full duration-200 ease-in-out'></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
