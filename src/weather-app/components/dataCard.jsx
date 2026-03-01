import React, {useState} from 'react'

export const DataCard = (props) => {
    const tempInC = props.currTemperature;
    const tempInF = ((tempInC * 9/5) + 32).toFixed(2);
    return (
        <div className="weather-card">
            <div className = 'top'>
                <h3>City name : {props.cityName}</h3>
                <h4>Country name : {props.countryName}</h4>
            </div>
            <div className = 'mid'>
                <h3>Current temperature(in Celsius) : {props.currTemperature}</h3>
                <h4>Current temperature(in Fahrenheit) : {tempInF}</h4>
                <h4>Weather description : {props.desc}</h4>
                <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon"/>
            </div>
            <div className = 'low'>
                <h4>Humidity percentage: {props.humidity}</h4>
                <h4>Wind speed : {props.windSpeed}</h4>
            </div>
        </div>
    )
}
