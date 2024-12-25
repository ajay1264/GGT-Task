import React from 'react';

function BeerCard({ beer }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <img 
        src={beer.image_url ? beer.image_url : 'https://via.placeholder.com/300x300'} 
        alt={beer.name} 
        className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{beer.name}</h2>
      <p className="text-sm text-gray-600 italic mb-2">{beer.tagline}</p>
      <p className="text-gray-700 text-base">{beer.description}</p>
    </div>
  );
}

export default BeerCard;
