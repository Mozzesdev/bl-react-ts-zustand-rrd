import { Link } from "react-router-dom";
import { useAppStore } from "@/store/store";

const Header = () => {
  const isMobileMenuOpen = useAppStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useAppStore((state) => state.toggleMobileMenu);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          My App
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4">
          <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
