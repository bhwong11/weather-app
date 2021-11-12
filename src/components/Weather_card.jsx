import React,{useState} from 'react';
import '../css/weather_card.css'

function WeatherCard(props){
    function getDayOfWeek(){
        let days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
        let date = new Date(props.dateUnixTime*1000)
        return days[date.getDay()]
    }
    return(
        <div style={{backgroundColor:props.color}}>
            <p className="weather_card_dark-gray">{getDayOfWeek()}</p>
            <img src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} />
            <div className="weather_card_temps">
            <p>{((props.temp.max - 273.15) * 9/5 + 32).toFixed(1)}&deg;</p>
            <p className="weather_card_dark-gray">{((props.temp.min - 273.15) * 9/5 + 32).toFixed(1)}&deg;</p>
            </div>
        </div>
    )
}

export default WeatherCard;