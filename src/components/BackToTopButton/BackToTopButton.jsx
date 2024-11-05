import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const BackToTopButton = ({ color = 'bg-blue-500', hoverColor = 'bg-blue-600' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 p-5 right-8 ${color} text-white p-4 rounded-full shadow-md hover:${hoverColor} transition duration-200 z-50`}
          aria-label="Back to top"
        >
          <span className="text-lg font-bold">↑</span>
        </button>
      )}
    </>
  );
};

// Add PropTypes for validation
BackToTopButton.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default BackToTopButton;
