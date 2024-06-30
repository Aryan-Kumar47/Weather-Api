import React from 'react'
import { BsWind } from "react-icons/bs";
import { TbTemperatureCelsius } from 'react-icons/tb';
import { FaCloud } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

export default function YourWeather({data}) {
  console.log(data)
  const date = new Date()
  return (
    <div className='w-full flex justify-center items-start mt-10'>
      <div className='flex justify-center items-center flex-col md:w-[60%] w-[80%] bg-slate-300 px-4 py-10 shadow-md rounded-md'>
        {
          data.name ? (
            <>
            <div className='flex w-full'>
              <p className='text-[3.5rem]'>{data?.name}</p>
              <img className='w-10 h-10 object-cover' src={`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`} alt='flag'/>
            </div>
            <div className='flex flex-col w-full'>
              <FormattedDate date={date}/>
            </div>
            <div className='flex w-full justify-between sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex items-center justify-center'>
                <div className='w-20 h-20'>
                  <img className='w-full h-full object-cover' src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`} alt='temp'/>
                </div>
                <h1 className='sm:text-5xl text-3xl'>{data?.main?.temp}</h1>
                <TbTemperatureCelsius size={35} />
              </div>
              <div className='text-xl flex flex-col justify-start items-start'>
                <div className='flex justify-start items-center gap-x-4'>
                  <BsWind size={25} className='text-blue-400'/>
                  <p>{`${data?.wind?.speed} m/s`}</p>
                </div>
                <div className='flex justify-start items-center gap-x-4'>
                  <WiHumidity size={40} className='text-blue-400'/>
                  <p>{`${data?.main?.humidity} %`}</p>
                </div>
                <div className='flex justify-start items-center gap-x-4'>
                  <FaCloud size={25} className='text-blue-400'/>
                  <p>{`${data?.clouds?.all} %`}</p>
                </div>
              </div>
            </div>
            </>
          ) : <div className='text-lg'>Not Found</div>
        }
      </div>
    </div>
  )
}

function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if(hours < 10) {
    hours = `0${hours}`
  }
  let minutes = props.date.getMinutes();
  if(minutes < 10) {
    minutes = `0${minutes}`
  }
  return (
    <div className='text-2xl'>{day}, {hours}:{minutes}</div>
  );
}
