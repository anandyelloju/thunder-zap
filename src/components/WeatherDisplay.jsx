import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="text-center mt-4">
      {weather ? (
        <div>
          <h2 className="text-2xl">{weather.name}</h2>
          <p className="text-xl">{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
