import React, { useState, useEffect } from 'react';
import './Weather.css';

// Replace with your actual API key and preferred API endpoint
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'YOUR_DEFAULT_API_KEY';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function Weather() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!location) {
      setError('Please enter a location.');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(`Error fetching weather: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  // Fetch weather for a default location on initial load if desired
  // useEffect(() => {
  //   setLocation('London'); // Example default location
  //   fetchWeather();
  // }, []);

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name or zip code"
          value={location}
          onChange={handleLocationChange}
          className="weather-input"
        />
        <button type="submit" className="weather-button">
          Get Weather
        </button>
      </form>

      {loading && <p className="weather-message">Loading weather...</p>}
      {error && <p className="weather-message error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <img 
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
          <p>Feels Like: {Math.round(weatherData.main.feels_like)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
