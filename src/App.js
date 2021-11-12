import './App.css';
import WeatherCard from './components/Weather_card.jsx';
import React,{useState,useEffect} from 'react';

function App() {
  const [dailyWeather,setDailyWeather] = useState(null);
  const [error,setError] = useState(null);
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=38.91&lon=-77.04&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then(data=>data.json()).then(json=>{
      if(json.cod){
        setError('Error collecting data')
      }
      setDailyWeather(json.daily)
    })
  },[])
  

  return (
    <div className="App">
      {error?<h3>{error}</h3>:<>
        <div className = "weather-board">
        {dailyWeather? <div className="weather-display">
          {dailyWeather.slice(0,5).map((day,idx)=>{
            if(idx===0){
              return (<WeatherCard temp={day.temp} color="lightgrey" dateUnixTime={day.dt} weather={day.weather}/>)
            }
            return (<WeatherCard temp={day.temp} color="white" dateUnixTime={day.dt} weather={day.weather}/>)
          })}
        </div>:<div>loading...</div>}
        </div>
      </>}
      
    </div>
  );
}

export default App;
