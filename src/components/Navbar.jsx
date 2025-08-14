import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiX,
  FiMenu,
} from "react-icons/fi";
import logo from "../assets/orbit logo.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    {
      name: "Home",
    },
    {
      name: "Products",
      //   dropdown: [

      //   ],
    },
    {
      name: "Services",
    },
    {
      name: "Career",
    },
    {
      name: "About Us",
    },
    {
      name: "Contact Us",
    },
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 ">
      {/* Top bar with hamburger menu, logo, and right icons */}
      <div className="max-w-6xl mx-auto px-8 sm:px-8 lg:px-8 xl:px-0 2xl:max-w-[1700px]">
        <div className="flex justify-between h-16">
          {/* Left section - hamburger and logo */}
          <div className="flex items-center">
            <button
              className="md:hidden  hover:text-gray-400 hover:underline focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <div className="flex-shrink-0 flex items-center ml-4 md:ml-0">
              <a href="#" className="block">
                <img className="h-20 w-auto mt-5" src={logo} />
              </a>
            </div>

            {/* Desktop nav items */}
            <div className="hidden md:flex md:ml-6 md:space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className={`px-3 py-2 md:px-2 rounded-md text-sm font-medium flex items-center
                          ${activeDropdown === item.name ? "bg-gray-100" : ""}
                  hover:underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-200
                      `}
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    {/* <FiChevronDown className="ml-1" size={16} /> */}
                  </button>

                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-1 z-10">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="block px-4 py-2 text-sm  hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right section - search, cart, and sign in */}
          <div className="flex items-center">
            {!searchOpen && (
              <>
                <div className="hidden md:flex md:space-x-1">
                  <button
                    className="  px-3 py-2 rounded-md text-sm font-medium "
                    onClick={toggleSearch}
                  >
                    <FiSearch size={20} />
                  </button>

                  <a
                    href="#"
                    className="  px-3 py-2 rounded-md text-sm font-medium hover:underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-200"
                  >
                    Sign in
                  </a>
                </div>

                <button
                  className="md:hidden   focus:outline-none hover:underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-200"
                  onClick={toggleSearch}
                >
                  <FiSearch size={20} />
                </button>
              </>
            )}

            {searchOpen && (
              <div className="flex items-center w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search Microsoft.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="ml-2  hover:text-gray-900"
                  onClick={toggleSearch}
                >
                  <FiX size={20} />
                </button>
              </div>
            )}

            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden  dark:bg-gray-900 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  className=" hover:text-gray-900  hover:bg-gray-50 block w-full text-left px-3 py-2 rounded-md  font-medium  justify-between items-center hover:underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-200"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  {/* <FiChevronDown
                    className={`transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                    size={16}
                  /> */}
                </button>

                {activeDropdown === item.name && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.link}
                        className="block px-3 py-2 hover:bg-gray-50 rounded-md  font-medium"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 pt-2">
              <a
                href="#"
                className="block px-3 py-2  hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium hover:underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-200"
              ></a>
              <a
                href="#"
                className="block px-3 py-2  hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium hover:underline decoration-1 underline-offset-4 hover:decoration-2 transition-all duration-200"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
