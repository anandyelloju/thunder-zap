import React, { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border-2 border-gray-300 p-2 rounded-l-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
