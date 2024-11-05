import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

// Sample data to simulate product loading with image URLs
const fakeProductData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `$${(i + 1) * 10}`,
  image: `https://via.placeholder.com/150?text=Product+${i + 1}`, // Placeholder image
}));

const SkeletonLoader = () => (
  <div className="p-4 bg-gray-200 shadow-lg rounded-lg flex flex-col items-center animate-pulse">
    <div className="w-48 h-48 bg-gray-300 mb-4"></div> {/* Increased placeholder size */}
    <div className="h-6 w-24 bg-gray-300 mb-2"></div>
    <div className="h-4 w-16 bg-gray-300"></div>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState(fakeProductData);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });
  const [selectedImage, setSelectedImage] = useState(null); // State to manage selected image

  // Load more products when the user scrolls to the bottom
  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      setTimeout(() => {
        setProducts((prev) => [
          ...prev,
          ...Array.from({ length: 10 }, (_, i) => ({
            id: prev.length + i + 1,
            name: `Product ${prev.length + i + 1}`,
            price: `$${(prev.length + i + 1) * 10}`,
            image: `https://via.placeholder.com/150?text=Product+${prev.length + i + 1}`, // Placeholder image
          })),
        ]);
        setLoading(false);
      }, 1000);
    }
  }, [inView, loading]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-8">
      <BackToTopButton />
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleImageClick(product.image)} // Trigger image zoom on click
          >
            <img src={product.image} alt={product.name} className="w-48 h-48 mb-4 object-cover rounded-lg" /> {/* Increased size */}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </motion.div>
        ))}
        {loading && Array.from({ length: 3 }).map((_, i) => <SkeletonLoader key={i} />)}
      </div>

      {/* Infinite scroll trigger point */}
      <div ref={ref} className="h-20 flex justify-center items-center mt-8">
        {loading && <p>Loading more products...</p>}
      </div>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <img src={selectedImage} alt="Zoomed" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl focus:outline-none">✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
