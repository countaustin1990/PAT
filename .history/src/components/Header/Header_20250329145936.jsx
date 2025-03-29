import { useState, Fragment } from 'react';
import {
  BriefcaseIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  PencilIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [showBusinessHours, setShowBusinessHours] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search input
  const [filteredResults, setFilteredResults] = useState([]); // State to manage filtered search results
  const [data] = useState([
    // Sample data to filter (you can replace this with actual data)
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Fashion' },
    { name: 'Product 3', category: 'Home Appliances' },
    { name: 'Product 4', category: 'Books' },
  ]);

  const goToHome = () => navigate('/');
  const goToProducts = () => navigate('/products');

  const toggleBusinessHoursPopup = () => {
    setShowBusinessHours(!showBusinessHours);
  };

  // Search and Filter Logic
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filtering logic based on search query
    if (query) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="header sticky top-0 z-50 shadow-md lg:flex lg:items-center lg:justify-between container mx-auto px-4 py-6 bg-red-500">
      <div className="min-w-0 flex-1">
        <h2
          className="brand-name text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight cursor-pointer text-gray-100"
          onClick={goToHome}
        >
          PayPayTouch
        </h2>

        {/* Search Input */}
        <div className="relative mt-4 lg:mt-0">
          <div className="flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products or categories"
              className="search-input bg-white text-gray-700 px-4 py-2 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-gray-700 px-4 py-2 rounded-r-md text-white">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Search Results Dropdown */}
          {searchQuery && (
            <div className="absolute bg-white shadow-lg w-full mt-1 rounded-lg">
              {filteredResults.length > 0 ? (
                <ul className="p-2">
                  {filteredResults.map((item, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                    >
                      {item.name} - {item.category}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-2 text-gray-500">No results found</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div
            className="item-icon mt-2 flex items-center text-sm text-gray-200 cursor-pointer"
            onClick={toggleBusinessHoursPopup}
          >
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-200" />
            Business Hours
          </div>

          <div className="item-icon mt-2 flex items-center text-sm text-gray-200 cursor-pointer" onClick={goToProducts}>
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-200" />
            Order Now
          </div>
        </div>
      </div>

      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            className="action-button edit-button bg-gradient-to-r from-gray-700 to-gray-500 text-white px-4 py-2 rounded-md shadow-md"
            onClick={goToHome}
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
            Home
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            className="action-button product-button bg-gradient-to-r from-gray-700 to-gray-500 text-white px-4 py-2 rounded-md shadow-md"
            onClick={goToProducts}
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
            Products
          </button>
        </span>

        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="menu-button">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" />
          </MenuButton>
          <Transition as={Fragment}>
            <MenuItems className="dropdown-menu">
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={goToHome}
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'} cursor-pointer`}
                  >
                    Home
                  </a>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      {/* Modal for Business Hours */}
      {showBusinessHours && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 fixed inset-0" onClick={toggleBusinessHoursPopup}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-xs w-full">
            <h1 className="text-gray-700 text-3x1 uppercase">Monday till Saturday</h1>
            <h2 className="text-lg font-bold mb-2">Business Hours</h2>
            <ul className="text-gray-700">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
            <button onClick={toggleBusinessHoursPopup} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
