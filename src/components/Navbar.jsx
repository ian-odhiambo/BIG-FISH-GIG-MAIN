import { useState } from "react";
import { Link } from "react-router-dom";
import bigFish from "../assets/big_fish.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black/70 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo - Larger */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={bigFish}
            alt="Logo"
            className="h-20 w-20 rounded-full object-cover border-2 border-white/30"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white/90 hover:text-white font-medium">
            Home
          </Link>
          <Link to="/menu" className="text-white/90 hover:text-white font-medium">
            Menu
          </Link>
          <Link to="/about" className="text-white/90 hover:text-white font-medium">
            About
          </Link>
          <Link to="/gallery" className="text-white/90 hover:text-white font-medium">
            Gallery
          </Link>
          <Link to="/reserve" className="text-white/90 hover:text-white font-medium">
            Reserve
          </Link>
        </nav>

        {/* Right-side Reserve Button */}
        <div className="hidden md:flex">
          <Link
            to="/reserve"
            className="ml-4 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-red-400"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 pt-2 pb-4 space-y-1">
          <Link to="/" className="block text-white/90 hover:text-white py-2">
            Home
          </Link>
          <Link to="/menu" className="block text-white/90 hover:text-white py-2">
            Menu
          </Link>
          <Link to="/about" className="block text-white/90 hover:text-white py-2">
            About
          </Link>
          <Link to="/gallery" className="block text-white/90 hover:text-white py-2">
            Gallery
          </Link>
          <Link
            to="/reserve"
            className="block text-white bg-red-600 text-center rounded px-4 py-2 hover:bg-red-700 mt-2"
          >
            Reserve
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;