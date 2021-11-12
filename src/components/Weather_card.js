import React,{useState} from 'react';
import 

function WeatherCard(props){
    return(
        <>
            <p>Low: {props.temp.min}</p>
            <p>High: {props.temp.high}</p>
            <p>icon id: {props.weather.icon}</p>
            <img src ={`https://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}/>
        </>
    )
}

export default WeatherCard;