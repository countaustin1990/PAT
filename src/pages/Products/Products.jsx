import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";



// Sample data to simulate product loading
const fakeProductData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: `$${(i + 1) * 10}`,
}));

const SkeletonLoader = () => (
  <div className="p-4 bg-gray-200 shadow-lg rounded-lg flex flex-col items-center animate-pulse">
    <div className="w-32 h-32 bg-gray-300 mb-4"></div>
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
          })),
        ]);
        setLoading(false);
      }, 1000);
    }
  }, [inView, loading]);

  return (
    
    <div className="p-8">
      <BackToTopButton/>
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 bg-gray-300 mb-4"></div> {/* Placeholder for image */}
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
    </div>
  );
};

export default Products;
