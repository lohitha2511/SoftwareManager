import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [currLoggedIn, setCurrLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("name")
    ) {
      setCurrLoggedIn(true);
    } else {
      setCurrLoggedIn(false);
    }
  };

  const logoutUser = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("name");
    checkLogin();
    alert("Logout Successful!");
    navigate("/login");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
              Issue Tracker
            </h1>
          </div>
          {currLoggedIn ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={logoutUser}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium 
            hover:bg-indigo-500 transform hover:scale-105 transition-all duration-200
            shadow-md hover:shadow-lg border border-indigo-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium 
                hover:bg-indigo-500 transform hover:scale-105 transition-all duration-200
                shadow-md hover:shadow-lg border border-indigo-600"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
