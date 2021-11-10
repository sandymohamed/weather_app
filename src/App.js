// import files
import React, {useState} from "react";
import Data from './data.json'
import {  Player } from '@lottiefiles/react-lottie-player';
import './App.css'

function App(){
// global variables
const apiKey="39b03ffb50ffbb93a24dd200557d9566";
const [city, setCity] =useState('الاسكندرية');
const [weatherData, setWeatherData]= useState([{}])

//fetching weather data 
const getWeatherData= async() =>{
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) 
    .then(response => response.json())
    .then(data => {
      setWeatherData(data)
      console.log("weatherData = ",weatherData)});

}



return(
  <>
<Player
  autoplay
  loop
  src="https://assets2.lottiefiles.com/private_files/lf30_jmgekfqg.json"
  style={{ height: '300px', width: '300px' }}
>
</Player> 
<div className="container">
 <h1>welcome</h1>
  <label htmlFor="city">Choose a city : </label>
  <select name="city" id="city"  onChange={(e)=> setCity(e.target.value)}>
  {/*get names of cities from data.json  */}
  {Data.cities.map((item,index) =>{
       return <option value={item} key={index}>{ item } </option>
      })}
  </select>
  <button onClick={getWeatherData}>show weather</button>
 
{/* check if the data != undefined */}
  {typeof weatherData.main === 'undefined' ?
      (<div>
        <p>select a city to get the weather of .</p>
        </div>)  :(
          
          <div className="weather-data">

<div className="row">
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/temporary_files/PH5YkW.json"
                    style={{ height: '160px', width: '160px' }}
                  >
                  </Player> 
                  <p className="date">date: {new Date().toString()}</p>

                 </div>
            <div className="row">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/private_files/lf30_MK1ZRw.json"
              style={{ height: '120px', width: '120px' }}
            >
            </Player> 
              <p className="city">city name : {weatherData.name}</p>
              </div>

              <div className="row">
                <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_dzzjxbre.json"
                    style={{ height: '60px', width: '60px' }}
                  >
                  </Player> 
                  <p className="temp"> temprature : {Math.round(weatherData.main.temp)} <sup>o</sup>F</p>
               </div>

                <div className="row">
                            <Player
                  autoplay
                  loop
                  src="https://assets3.lottiefiles.com/packages/lf20_be6giU.json"
                  style={{ height: '70px', width: '70px' }}
                >
                </Player> 
                  <p className="weather"> description : {weatherData.weather[0].description}</p>

                  </div>
                  
                  <div className="row">
                <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/private_files/lf30_vcow7mxk.json"
                    style={{ height: '160px', width: '160px' }}
                  >
                  </Player> 
                  <p className="wind"> wind speed : {Math.round(weatherData.wind.speed)} </p>

                 </div>

               


                </div>
        )
  }
  </div>
  </>
);

}
export default App;

