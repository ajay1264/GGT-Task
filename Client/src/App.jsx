import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './components/BeerCard';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer data', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Beer List</h1>
        <input
          type="text"
          placeholder="Search beers..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-4 mb-6 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBeers.map(beer => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
 