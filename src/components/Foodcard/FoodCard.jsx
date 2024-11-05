import { useNavigate } from 'react-router-dom';

const FoodCard = ({ food }) => {
  const navigate = useNavigate();

  const goToProductDetails = () => {
    navigate(`/productsD/${food.id}`); // Navigate to product details with the food ID
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={food.image || '/path-to-fallback-image.jpg'} // Fallback image
        alt={food.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{food.name}</h3>
      <p className="text-gray-300">{food.description}</p>
      <p className="text-lg font-bold">${food.price}</p>
      <button
        onClick={goToProductDetails}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
        aria-label={`View details of ${food.name}`}
      >
        View Details
      </button>
    </div>
  );
};

export default FoodCard;
