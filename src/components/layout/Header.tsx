import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "@/store/store";

const Header = () => {
  const { status, logout, isMobileMenuOpen, toggleMobileMenu } = useAppStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const AuthNav = () => {
    if (status === "authenticated") {
      return (
        <>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-blue-600"
          >
            Logout
          </button>
        </>
      );
    }
    return (
      <Link to="/login" className="text-gray-600 hover:text-blue-600">
        Login
      </Link>
    );
  };

  const AuthNavMobile = () => {
    if (status === "authenticated") {
      return (
        <>
          <Link
            to="/dashboard"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
          >
            Logout
          </button>
        </>
      );
    }
    return (
      <Link
        to="/login"
        className="block py-2 text-gray-600 hover:text-blue-600"
      >
        Login
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          My App
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
          <AuthNav />
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
          <Link
            to="/about"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            About
          </Link>
          <AuthNavMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
