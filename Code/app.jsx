import React, { useState, useEffect } from 'react';

const WeatherDashboard = () => {
  // State variables
  const [city, setCity] = useState('Pune');
  const [weather, setWeather] = useState(null);

  // Fetch weather data when 'city' changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();

    // Cleanup function to avoid memory leaks
    return () => console.log(`Cleaned up data fetching for ${city}`);
  }, [city]); // Dependency array

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div>
        {weather ? (
          <>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}&deg;C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;