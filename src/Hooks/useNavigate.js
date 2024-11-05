// hooks/useNavigation.js
import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToProducts = () => {
    navigate('/products');
  };

  const goToProductDetails = () => {
    navigate('/products-details');
  };

  return {
    goToHome,
    goToProducts,
    goToProductDetails,
  };
};

export default useNavigation;
