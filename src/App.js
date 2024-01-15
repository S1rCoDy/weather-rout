import React, { useState, useEffect } from 'react';
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
      const timezoneOffset = (data.timezone + (-5) *3600) * 1000; // Add 5 hours and convert seconds to milliseconds
      const localTime = new Date(currentTime.getTime() + timezoneOffset);

      setLocalTime(localTime.toLocaleTimeString());
    } catch (error) {
      setWeather(null);
      setError('Город не найден');
      setLocalTime(null);
    }
  };

  useEffect(() => {
    // Вызываем getWeather, когда компонент монтируется
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Погода и время</h1>
      <div>
        <input
          type="text"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Получить погоду</button>
      </div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Температура: {weather.main.temp} °C</p>
          <p>Описание: {weather.weather[0].description}</p>
          <p>Влажность: {weather.main.humidity}%</p>
          <p>Скорость ветра: {weather.wind.speed} м/с</p>
        </div>
      )}
      {localTime && <p>Местное время: {localTime}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
