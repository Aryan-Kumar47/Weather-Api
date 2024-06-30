import React, { useEffect, useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import YourWeather from './YourWeather';

const API_key = "d1845658f92b31c64bd94f06f7188c9c";
export default function GrandLocation() {
  const [hasCoordinates , setHasCoordinates] = useState(false)
  const [isLoading , setIsLoading] = useState(false)
  const [data , setData] = useState()
  useEffect(() => {
    function getfromSessionStroage(){
      // check the coordinates are already present
      const localCoordinates = sessionStorage.getItem('user-container');
      if(!localCoordinates){
        setHasCoordinates(false)
      }
      else{
        setHasCoordinates(true)
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
      }
    }
    getfromSessionStroage()
    async function fetchUserWeatherInfo(coordinates){
      const {lat, long} = coordinates;
      setIsLoading(true)
    
      // API call
      try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`);
        let dataU = await response.json();
        setData(dataU)
        // renderWeatherInfo(data);
      }
      catch(err) {
        
      } finally {
        setIsLoading(false)
      }
    }
  },[])

  function getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
      alert('No geolocation support avaiable');
    }
  }
  function showPosition(position){
    const userCoordinates = {
      lat: position.coords.latitude,
      long : position.coords.longitude,
    };
    console.log(userCoordinates)
    sessionStorage.setItem('user-container' , JSON.stringify(userCoordinates));
    // fetchUserWeatherInfo(userCoordinates);
  }
  return (
    isLoading ? <div className='w-full h-full flex justify-center items-center'><div class="spinner"></div></div> : 
      hasCoordinates ? <YourWeather data={data}/> :
      (
        <div className='flex justify-center items-center flex-col mt-5'>
          <div className='p-10 rounded-full border w-fit bg-green-400 shadow'>
            <MdLocationOn size={70} className='text-green-400 bg-white shadow-md rounded-full'/>
          </div>
          <div className='flex items-center justify-center gap-2 flex-col'>
            <h1 className='capitalize sm:text-5xl text-3xl'>grant location access</h1>
            <p className='capitalize text-lg'>allow access to get weather information</p>
            <button onClick={getLocation} className='capitalize px-8 py-4 border shadow-md rounded-full bg-green-400 text-white'>allow access</button>
          </div>
        </div>
      ) 
  )
}
