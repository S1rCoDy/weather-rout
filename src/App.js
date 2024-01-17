import React, { useState, useEffect } from 'react';
import cloudy from './cloudy.png';
import good from './good.png'
import groza from './groza.png'
import rainSnow from './rain-snow.png'
import rain from './rain.png'
import snowy from './snowy.png'
import sun from './sun.png'
import wind from './wind.png'
import fog from './fog.png'
import lupa from './lupa.png'
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [localTime, setLocalTime] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '2e9935b5f077ebc45bcdfb18dbd5b07d';

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
      );

      if (!response.ok) {
        throw new Error('Город не найден');
      }

      const data = await response.json();
      setWeather(data);
      setError(null);

      // Получаем текущее время после успешного запроса о погоде
      const currentTime = new Date();
      const timezoneOffset = (data.timezone + (-5) * 3600) * 1000; // Add 5 hours and convert seconds to milliseconds
      const localTime = new Date(currentTime.getTime() + timezoneOffset);

      setLocalTime(localTime.toLocaleTimeString());
    } catch (error) {
      setWeather(null);
      setLocalTime(null);
    }
  };
  
  useEffect(() => {
    // Вызываем getWeather, когда компонент монтируется
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (city.trim() !== '') {
      getWeather();
    }
  }, []);

  return (
    <div className="App">
      <h1>Погода и время</h1>
      <div className='search'>
        <input
          type="text"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img src={lupa} onClick={getWeather}/>
      </div>
      {weather && (
        <div>

          <h2>{weather.name}</h2>
          <p>Температура: {weather.main.temp} °C</p>
          <p>Описание: {weather.weather[0].description}</p>
          <p>Влажность: {weather.main.humidity}%</p>
          <p>Скорость ветра: {weather.wind.speed} м/с</p>
          {(() => {
            let weatherImage;
            switch (weather.weather[0].main) {
              case 'Clear':
                weatherImage = sun;
                break;
              case 'Clouds':
                weatherImage = cloudy;
                break;
              case 'Rain':
                weatherImage = rain;
                break;
              case 'Snow':
                weatherImage = snowy;
                break;
              case 'Thunderstorm':
                weatherImage = groza;
                break;
              case 'Drizzle':
                weatherImage = rainSnow;
                break;
              case 'Mist':
                weatherImage = fog;
                break;
              case 'Fog':
                weatherImage = fog;
                break;
              case 'Haze':
                weatherImage = fog;
                break;
              case 'Wind':
                weatherImage = wind;
                break;
              default:
                weatherImage = good;
            }

            return <img src={weatherImage} alt="Погодное изображение" />;
          })()}
        </div>
      )}
      {localTime && <p>Местное время: {localTime}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;