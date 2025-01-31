import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai';
import { CiLogin } from "react-icons/ci";
import { MdOutlineLocalMovies } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from 'C:/Users/MSI/OneDrive/Desktop/MERN App/frontend/src/redux/api/user.js';
import { logout } from 'C:/Users/MSI/OneDrive/Desktop/MERN App/frontend/src/redux/features/Auth/authSlice.js';
import { welcomeTranslations } from "../Auth/constants/country";
import { Lk } from "react-flags-select";
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      setShowLogoutConfirm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center text-gray-100 text-shadow px-10 py-3 mb-3 rounded bg-gradient-to-r from-gray-800 to-gray-900">
      {/* Home and Shop Links */}
      <div className="flex items-center space-x-6">
        <div className="group">
          <Link to="/" className="flex items-center text-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-transparent hover:bg-[#556271] focus:bg-[#1a1f24] transition-all px-4 py-2 rounded"
            >
              <AiOutlineHome className="mr-2" size={26} />
              <span className="hidden md:block">Home</span>
            </motion.div>
          </Link>
        </div>
        <div className="group">
          <Link to="/timeline" className="flex items-center text-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-transparent hover:bg-[#556271] focus:bg-[#1a1f24] transition-all px-4 py-2 rounded"
            >
              <MdOutlineLocalMovies className="mr-2" size={26} />
              <span className="hidden md:block">TimeLine</span>
            </motion.div>
          </Link>
        </div>
        {userInfo && (
              <Link to="/location/create" className=" text-white">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex bg-transparent hover:bg-[#556271] focus:bg-[#1a1f24] transition-all px-4 py-2 rounded"
                      >
                        <MdOutlineLocalMovies className="mr-2" size={26} />
                        <span className="hidden md:block">Post</span>
                      </motion.div>
                </Link>
          )}

        <div className="pl-[43rem] group flex flex-row">
          {userInfo && (
            <motion.div whileHover={{ rotate: 10 }}>
              <Lk />
            </motion.div>
          )}
          <p >{userInfo && welcomeTranslations[userInfo?.country]}</p>
        </div>

      </div>

      {userInfo ? (
        <div className="relative z-50">
          <div className="group">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white group focus:outline-none duration-300 hover:bg-[#21262c] focus:bg-[#1a1f24] transition-all px-4 py-2 rounded"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-sm uppercase font-normal text-white text-[0.7rem] leading-[14px] tracking-[1.2px] px-6 h-10 transition duration-200 bg-gradient-to-r from-gray-900 to-indigo-600 clip-path-polygon"
              >
                {userInfo.username}
              </motion.button>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${dropdownOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
          </div>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 bg-[#1a1a1a] text-white w-40 rounded shadow-lg"
              >
                {userInfo.isAdmin && (
                  <li>
                    <Link
                      to="/admin/movies/dashboard"
                      className="block px-4 py-2 hover:bg-[#21262c] hover:bg-[#556271]transition-all rounded"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-[#556271]  transition-all rounded"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 hover:bg-[#556271] focus:bg-[#1a1f24] transition-all rounded"
                  >
                    Logout
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex items-center space-x-6">
          <div className="group">
            <Link to="/login" className="flex items-center text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-transparent hover:bg-[#556271] focus:bg-[#1a1f24] transition-all px-4 py-2 rounded"
              >
                <CiLogin className="mr-2" size={26} />
                <span className="hidden md:block">Login</span>
              </motion.div>
            </Link>
          </div>
          <div className="group">
            <Link to="/register" className="flex items-center text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-transparent hover:bg-[#556271] focus:bg-[#1a1f24] transition-all px-4 py-2 rounded"
              >
                <AiOutlineUserAdd className="mr-2" size={26} />
                <span className="hidden md:block">Register</span>
              </motion.div>
            </Link>
          </div>
        </div>
      )}

      {showLogoutConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 flex items-center justify-center z-50 w-full h-full bg-black bg-opacity-60"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-lg font-semibold text-black mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-center">
              <button
                onClick={handleConfirmLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-2"
              >
                Logout
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-green-200 text-slate-900 px-4 py-2 rounded-md hover:bg-slate-300 ml-2"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;