import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";



const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  return (
    <footer className="bg-gradient-to-r from-red-500 to-red-600 text-white py-8">
      <div className="w-full max-w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3"  onClick={scrollToTop}>
              {/* Add Logo if necessary */}
              <span className="text-xl font-bold capitalize tracking-wide">
                PayPay Touch
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-100">
              A great taste of paypay cooking
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold tracking-wider">
              Resources
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-100 transition duration-300"  onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-100 transition duration-300"  onClick={scrollToTop}>Products</Link>
              </li>
              {/*<li>
                <Link to="/services" className="hover:text-gray-100 transition duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-100 transition duration-300">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gray-100 transition duration-300">Blog</Link>
              </li>*/}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold tracking-wider">
              Legal
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-100 transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-100 transition duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-100">
            Najoda Foundation © 2023. All Rights Reserved.
          </span>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              className="hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              className="hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={18} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
