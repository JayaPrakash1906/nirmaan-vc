import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../img/nirmaan-iitm.14fdf833.svg';
import { FaArrowAltCircleDown, FaBell, FaPaperPlane, FaRegBell, FaUserCircle, FaCheck, FaTimes, FaUser } from 'react-icons/fa';
import axios from 'axios';
import APP_URL from '../Config';

function NavBar() {
  const navigate = useNavigate();
  const [isBellHovered, setIsBellHovered] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const [rocketHover, setRocketHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null); // Track selected notification

  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
        setSelectedNotification(null); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleArrowHover = () => setArrowHover(true);
  const handleArrowLeave = () => setArrowHover(false);
  const handleProfileEnter = () => setProfileHover(true);
  const handleProfileLeave = () => setProfileHover(false);
  const handleRocketEnter = () => setRocketHover(true);
  const handleRocketLeave = () => setRocketHover(false);

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleNotificationClick = (id) => {
    if (selectedNotification === id) {
      setSelectedNotification(null); // Close the dropdown if same notification is clicked again
    } else {
      setSelectedNotification(id);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleApprovedResume = async () => {
    try {
      const result = await axios.post(`${APP_URL}approved-resume`);
      if (result.status === 200) {
        // Handle successful response
      }
    } catch (error) {
      // Handle error
    }
  };

  const ProfileView = async () => {
    try {
      const result = await axios.get(`${APP_URL}profile`);
      console.log(result.data);
    } catch (error) {
      // Handle error
    }
  };

  const handleApprove = (id) => {
    console.log('Approved notification ID:', id);
  };

  const handleDecline = (id) => {
    console.log('Declined notification ID:', id);
  };

  const notifications = [
    { id: 1, message: 'New comment on your post', profilePic: 'https://example.com/profile1.jpg' },
    { id: 2, message: 'New like on your comment', profilePic: 'https://example.com/profile2.jpg' },
    { id: 3, message: 'New follower', profilePic: 'https://example.com/profile3.jpg' },
  ];

  const styles = {
    transform: isBellHovered ? 'rotate(30deg)' : '',
    transitionTimingFunction: isBellHovered ? 'ease-in' : '',
    transition: isBellHovered ? '0.30s' : '',
  };

  const bellHoverStyles = {
    display: showNotifications ? 'block' : 'none',
    maxHeight: '200px',
    overflowY: 'auto',
    width: '390px',
  };

  return (
    <div className="navbar">
      <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 shadow-sm">
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="https://github.com/prasathnarayanan6/nirmaan-vc-app" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-green-500 hover:text-green-500 transition-all eas-in-out active:scale-[.100] active:duration-75">
              <i>TraK<span className="text-black">tor</span></i>
            </span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {showArrowIcon &&
                <li>
                  <a href="/Home" onMouseEnter={handleArrowHover} onMouseLeave={handleArrowLeave} className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group">
                    <FaArrowAltCircleDown /> <span className="sr-only">Scroll</span>
                    {arrowHover && (
                      <div className="absolute top-[35px;] right-[220px;] mt-2 w-30 bg-slate-100 border border-gray-200 rounded-lg shadow-md items-center">
                        <a href="/home?tab=teams" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Teams</a>
                        <a href="/home?tab=startups" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Startups</a>
                        <a href="/home?tab=mentors" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Mentors</a>
                        <a href="/home?tab=funding" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Funding</a>
                      </div>
                    )}
                  </a>
                </li>}
              <li>
                <div onClick={handleBellClick} className="relative block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group">
                  <FaRegBell style={{ ...styles }} />
                  {notifications.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-[-5px] right-[-5px] dark:border-gray-900 animate-pulse">
                      <span className="text-xs"></span>
                    </div>
                  )}
                  <span className="sr-only">Notifications</span>
                  <div className="absolute right-0 mt-5 text-black text-sm border border-gray-200 rounded-md" style={bellHoverStyles} ref={notificationsRef}>
                    <div className="py-2 max-h-48 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`flex items-center justify-between px-4 py-2 border m-2 border-gray-300 hover:bg-gray-100 cursor-pointer ${selectedNotification === notification.id ? 'bg-gray-200' : ''}`}
                            onClick={() => handleNotificationClick(notification.id)}
                          >
                            <div className="relative flex items-center space-x-2">
                              {notification.isProfilePic ? (
                                <img src={notification.profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
                              ) : (
                                <FaUser className="text-black w-5 h-5" />
                              )}
                              <div>{notification.message}</div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleApprove(notification.id)}
                                className="text-green-500 hover:bg-green-100 p-1 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95 active:bg-green-200"
                              >
                                <FaCheck />
                              </button>
                              <button
                                onClick={() => handleDecline(notification.id)}
                                className="text-red-500 hover:bg-red-100 p-1 rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95 active:bg-red-200"
                              >
                                <FaTimes />
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">No notifications</div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/" onMouseEnter={handleRocketEnter} onMouseLeave={handleRocketLeave} className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group">
                  <FaPaperPlane />
                </a>
              </li>
              <li>
                <div className="relative block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-green-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-300 ease-linear cursor-pointer group" onMouseEnter={handleProfileEnter} onMouseLeave={handleProfileLeave}>
                  <FaUserCircle />
                  {profileHover && (
                    <div className="absolute top-[33px;] right-0 mt-2 w-30 bg-slate-100 border border-gray-200 rounded-lg shadow-md items-center">
                      <a href="/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Profile</a>
                      <a href="/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Settings</a>
                      <button onClick={handleSignOut} className="block py-2 px-4 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">SignOut</button>
                      <FaBell className="absolute top-2 right-2 text-red-500" />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
