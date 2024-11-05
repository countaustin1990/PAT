//import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FoodCard from '../Foodcard/FoodCard';

const foods = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Food Item ${index + 1}`,
  description: `Description for Food Item ${index + 1}`,
  price: (Math.random() * 10 + 5).toFixed(2), // Random price between $5.00 and $15.00
  image: `https://via.placeholder.com/300?text=Food+${index + 1}`, // Placeholder image
}));

const FoodGallery = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/*<h2 className="text-2xl font-bold mb-6 text-center">Our Food Selection</h2>*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
