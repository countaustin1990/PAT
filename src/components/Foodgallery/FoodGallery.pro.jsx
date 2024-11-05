import React, { useState } from 'react';
import FoodCard from '../Foodcard/FoodCard';

const foods = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Food Item ${index + 1}`,
  description: `Description for Food Item ${index + 1}`,
  price: (Math.random() * 10 + 5).toFixed(2), // Random price between $5.00 and $15.00
  image: `https://via.placeholder.com/300?text=Food+${index + 1}`, // Placeholder image
}));

const FoodGallery = () => {
  // State to store search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to filter foods based on search query
  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6 bg-gradient-to-r from-gray-600 to-red-500">
      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          placeholder="Search food..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Food grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      {/* Show a message if no foods match the search */}
      {filteredFoods.length === 0 && (
        <p className="text-center text-gray-200">No food items found</p>
      )}
    </div>
  );
};

export default FoodGallery;
