import './App.css';
import { useState } from 'react';
import GrandLocation from './components/GrandLocation.js';
import Search from './components/Search.js';

function App() {
  const [activeTabHome , setActiveTabHome] = useState(true)
  return (
    <div className=''>
      <h1 className='text-7xl text-center'>Weather App</h1>
      <div className='flex justify-around mt-16'>
        <p onClick={() => setActiveTabHome(true)} className={`px-6 py-3 cursor-pointer rounded-full border hover:bg-red-400 hover:text-white duration-200 shadow-md`}>Your Weather</p>
        <p onClick={() => setActiveTabHome(false)} className={`px-6 py-3 cursor-pointer rounded-full border hover:bg-red-400 hover:text-white duration-200 shadow-md`}>Search Weather</p>
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
