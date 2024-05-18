import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/nirmaan-iitm.14fdf833.svg'
import {FaArrowAltCircleDown, FaList, FaPaperPlane, FaRegBell, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
function NavBar() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const showArrowIcon = currentPath === '/Home';
  const [isBellHovered, setIsBellHovered] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const [rocketHover, setRocketHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const handleArrowHover = () => {
    setArrowHover(true);
  }
  const handleArrowLeave = () => {
    setArrowHover(false)
  }
  const handleMouseEnter = () => {
    setProfileHover(true);
  }
  const handleMouseLeave = () => {
    setProfileHover(false);
  }
  const styles = {
      transform: isBellHovered?"rotate(30deg)" : "",
      transitionTimingFunction: isBellHovered?"ease-in" : "",
      transition: isBellHovered?"0.30s":""
  }
  const handleBellHover = () => {
    setIsBellHovered(!isBellHovered);
  };

  const rocketHandleHover = () => {
    setRocketHover(true);
  }
  const rocketHandleLeave = () => {
    setRocketHover(false);
  }
  const styless = {
    transform: rocketHover?"rotate(-20deg)":"",
    transition: rocketHover?"ease-in-out":"",
  }
  const handleSignOut = () => {
      const token = localStorage.removeItem('token');
      if(!token)
      {
        navigate('/')
      }
  }
  const handleApprovedResume = () =>{
    const result = axios.post('http://localhost:3000/api/v1/approved-resume')
    result.status(200)
  }
  // useEffect(()=>{
  //   setInterval(()=>{
  //     handleApprovedResume();
  //   }, 2000)
  // },[])

  const ProfileView = () => {
      const result = axios.get('http://localhost:3000/api/v1/profile-data')
  }
  return (
    <div className="navbar">
          <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 shadow-lg">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2">
              <a href="https://github.com/prasathnarayanan6/nirmaan-vc-app" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={img} className="h-10" alt="Flowbite Logo" />
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-green-500 hover:text-green-500 transition-all eas-in-out active:scale-[.100] active:duration-75"><i>TraK<span className="text-black">tor</span></i></span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto lg:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  {showArrowIcon &&
                  <li>
                     <a href="/Home" onMouseEnter={handleArrowHover} onMouseLeave={handleArrowLeave}  className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;">
                        <FaArrowAltCircleDown/> <span class="sr-only">Scroll</span>
                        {arrowHover && (
                          <div className="absolute top-[35px;] right-[220px;] mt-2 w-30 bg-slate-100 border border-gray-200 rounded-lg shadow-md items-center">
                              <a href="/Home?tab=teams" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Teams</a>
                              <a href="/Home?tab=startups" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Startups</a>
                              <a href="/Home?tab=mentors" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Mentors</a>
                              <a href="/Home?tab=funding" className="block py-1 px-6 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Funding</a>
                          </div>
                      )}
                     </a>
                  </li>
                  }
                  <li>
                     <a href="/Home"   className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" onMouseEnter={handleBellHover} onMouseLeave={handleBellHover}>
                        <FaRegBell style={styles}  /> <span class="sr-only">Notifications</span>
                        <div class="absolute inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-3 end-[188px;] dark:border-gray-900 animate-pulse"><span className="text-xs"></span></div>
                     </a>
                  </li>
                  <li>
                     <a href="/" className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;"><FaList /></a>
                  </li>
                  <li>
                     <a href="/" style={styless} onMouseEnter={rocketHandleHover} onMouseLeave={rocketHandleLeave} className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" ><FaPaperPlane /></a>
                  </li>
                  <li>
                      <div className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-green-500 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-300 ease-linear cursor-pointer group;" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><FaUserCircle />
                      {profileHover && (
                          <div className="absolute top-[33px;] right-0 mt-2 w-30 bg-slate-100 border border-gray-200 rounded-lg shadow-md items-center">
                              <a href="/profile" className="block py-2 px-4 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Profile</a>
                              <a href="/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">Settings</a>
                              <button onClick={handleSignOut} className="block py-2 px-4 text-gray-700 hover:bg-gray-400 text-sm hover:text-green-700 hover:rounded-lg">SignOut</button>
                          </div>
                      )}</div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default NavBar;
