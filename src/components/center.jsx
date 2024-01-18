import React, { useState } from "react";
import axios from 'axios';
import '../components/center.css';

function Center() {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=18845477563cb5bf0d3a2702990ebae6&units=metric`

    const searchLocation = (event) => {
        if (event.key === "Enter"){
            // Проверка ввода на наличие только букв (латинских и кириллических)
            if (/^[a-zA-Zа-яА-Я]+$/.test(location)) {
                axios.get(url)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                    setLocation('')
                })
                .catch((error) => {
                    console.error("Ошибка при получении данных о погоде: ", error);
                });
            } else {
                console.error("Ввод содержит недопустимые символы. Пожалуйста, введите только буквы.");
            }
        }
    }

    return (
        <div id="Center">
            <div className="search">
                <input 
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                type="text" />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp}°C</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
                        <p className="desk">Feels like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                        <p className="desk">Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className="bold">{data.wind.speed} km/h</p> :null}
                        <p className="desk">Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Center;
