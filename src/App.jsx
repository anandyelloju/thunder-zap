import React, { useState } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Replace with your OpenWeatherMap API key
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setWeather(data);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Unable to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <WeatherForm onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
