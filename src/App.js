import './App.css';
import WeatherCard from './components/Weather_card';
import React,{useState,useEffect} from 'react';

function App() {

  const [dailyWeather,setDailyWeather] = useState(null);
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=38.91&lon=-77.04&exclude=hourly,minutely&appid=${process.env.WEATHER_API_KEY}`)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
