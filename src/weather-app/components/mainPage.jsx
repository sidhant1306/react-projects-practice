import React, {useState} from 'react'
import {DataCard} from "./dataCard.jsx";



export const MainPage = () => {
    const [city, setCity] = useState('london');
    const personalKey = 'ddce8bcfbce5012d2468f3b69d980c7e';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${personalKey}&units=metric`

    const [data, setData] = useState('');

    const searchHandler =  () => {
        const call =  fetch(api)
                                .then((res) => res.json())
                                .then((response) => {setData(response)});
        // console.log(data);
        // const data = await call.json();
        // console.log(data)
    }
    return (
        <div className="main-container">
            <div  className="search-section">
                <input onChange={(e) => {
                    setCity(e.target.value);
                }}
                       type = 'text'
                       placeholder = 'Enter city name'
                />
                <button onClick={searchHandler}>Search</button>
                {/*we write it in this way, so that the data is only displayed when there is some data in the data variable, */}
                {/*this means so that we don't try to fetch data when we haven't even entered the city name*/}
                {data && (
                    <DataCard
                        cityName={data.name}
                        countryName={data.sys.country}
                        currTemperature={data.main.temp}
                        desc={data.weather[0].description}
                        icon={data.weather[0].icon}
                        windSpeed={data.wind.speed}
                        humidity={data.main.humidity}
                    />
                )}
            </div>

        </div>
    )
}
