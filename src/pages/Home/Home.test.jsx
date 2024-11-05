
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Hero from "../../components/Hero/Hero.test";
import HorizontalScrollBar from "../../components/HorizontalScrollBar/HorizontalScrollBar";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const goToProducts = () => {
    navigate('/products'); // Navigate to the Products page
  };

  const learnMore = () => {
    navigate('/learn-more'); // Navigate to the Learn More page (update the path as necessary)
  };

  return (
    <div>
      <Hero />
      <HorizontalScrollBar />
      <div className="flex justify-center mt-4">
        <button
          className="action-button edit-button bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-md shadow-md"
          onClick={goToProducts}
        >
          Check Out Our Menu
        </button>
        <button
          className="ml-4 action-button learn-more-button bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-md shadow-md"
          onClick={learnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
