import './App.css';
import { useState } from 'react';
import GrandLocation from './components/GrandLocation.js';
import Search from './components/Search.js';

function App() {
  const [activeTabHome , setActiveTabHome] = useState(true)
  return (
    <div className=''>
      <h1 className='sm:text-7xl text-center text-5xl'>Weather App</h1>
      <div className='flex justify-around mt-16'>
        <p onClick={() => setActiveTabHome(true)} className={`sm:px-6 sm:py-3 px-4 py-2 cursor-pointer rounded-full border ${activeTabHome ? 'bg-red-400 text-white' : ''} hover:bg-red-400 sm:text-base text-sm hover:text-white duration-200 shadow-md`}>Your Weather</p>
        <p onClick={() => setActiveTabHome(false)} className={`sm:px-6 sm:py-3 px-4 py-2 cursor-pointer sm:text-base text-sm rounded-full border ${activeTabHome ? '' : 'bg-red-400 text-white'} hover:bg-red-400 hover:text-white duration-200 shadow-md`}>Search Weather</p>
      </div>
      <div>
        {
          activeTabHome ? 
          <GrandLocation/> :
          <Search/>
        }
      </div>
    </div>
  );
}

export default App;
