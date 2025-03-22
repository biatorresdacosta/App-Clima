import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';


const Weather = () => {

  const search = async (city) =>{
    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
      //PESQUISAR O QUE É IMPORT.META.ENV.NOMEDAVARIAVEL
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

    } catch (error) {
      
    }
  }




  return (
    <div className='weather'>

      <div className="search-bar">
        <input type="text" placeholder='Pesquisar...' name="" id="" />
        <img src={search_icon} alt="" />
      </div>
   
      <img src={clear_icon} className='weather-icon' />
      <p className='temperature'>16ºC</p>
      <p className='location'>London</p>

      <div className="weather-data">

        <div className="col">
          <img src={humidity_icon} />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind_icon} />
          <div>
            <p>3.6</p>
            <span>Wind Speed Km/h</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Weather
