import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css'; // Importing custom styles

export default function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handlers for navigation
  const goToHome = () => navigate('/');
  const goToProducts = () => navigate('/products');

  return (
    <div className="header lg:flex lg:items-center lg:justify-between container mx-auto px-4 py-6 bg-red-500">
      <div className="min-w-0 flex-1">
        <h2 className="brand-name text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight cursor-pointer text-gray-100">
          PayPayTouch
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="item-icon mt-2 flex items-center text-sm text-gray-200 cursor-pointer" onClick={goToProducts}>
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-200" />
            Business Hours
          </div>
          <div className="item-icon mt-2 flex items-center text-sm text-gray-200 cursor-pointer" onClick={goToProducts}>
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-200" />
            Our Location
          </div>
          <div className="item-icon mt-2 flex items-center text-sm text-gray-200 cursor-pointer" onClick={goToProducts}>
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-200" />
            Order of the day
          </div>
          <div className="item-icon mt-2 flex items-center text-sm text-gray-200 cursor-pointer" onClick={goToProducts}>
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-200" />
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

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="menu-button">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" />
          </MenuButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="dropdown-menu">
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={goToHome} // Use goToHome for navigating
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
    </div>
  );
}
