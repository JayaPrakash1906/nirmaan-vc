import React, {useState} from 'react'
import { FaBars, FaBook, FaCalendar, FaChalkboardTeacher, FaFilePdf, FaFileUpload, FaGraduationCap, FaHome, FaPencilAlt, FaPeopleArrows} from 'react-icons/fa';

function SideBar() {
    const [userRole, setUserRole] = useState('customer');  
    const currentPath = window.location.pathname;
    const ShowArrowIcon = currentPath === '/customer/Home';
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-dark shadow-lg">
      <SideBarLink href="/home">
          <SideBarIcon icon={<FaHome size="16" />} tooltipText="Home" />
      </SideBarLink>
      <SideBarLink href="/startups">
          <SideBarIcon icon={<FaGraduationCap size="16" />} tooltipText="Startups" />
      </SideBarLink>
      <SideBarLink href="/mentors">
          <SideBarIcon icon={<FaChalkboardTeacher size="16" />} tooltipText="Mentor" />
      </SideBarLink>
      <SideBarLink href="/mentorship">
          <SideBarIcon icon={<FaBook size="16" />} tooltipText="Mentorship" />
      </SideBarLink>
      <SideBarLink href="/events">
              <SideBarIcon icon={<FaCalendar size="16" />} tooltipText="Events" />
      </SideBarLink>  
      <SideBarLink href="/connections">
        <SideBarIcon icon={<FaPeopleArrows size="16" />} tooltipText="Connections" />
      </SideBarLink>
      <SideBarLink href="/reports">
          <SideBarIcon icon={<FaFilePdf size="16" />} tooltipText="Reports" />
      </SideBarLink>
      <SideBarLink href="/uploads">
          <SideBarIcon icon={<FaFileUpload size="16" />} tooltipText="Uploads" />
      </SideBarLink>
      <SideBarLink href="/cms">
          <SideBarIcon icon={<FaPencilAlt size="16" />} tooltipText="Content Management System" />
      </SideBarLink>
    </div>
  );
}

const SideBarLink = ({ href, children }) => {
  return (
    <a href={href} className="block">
      {children}
    </a>
  );
};

const SideBarIcon = ({ icon, tooltipText }) => {
  const [hoverTooltip, setHoverTooltip] = useState(false);

  const handleMouseEnter = () => {
    setHoverTooltip(true);
  };

  const handleMouseLeave = () => {
    setHoverTooltip(false);
  };

  return (
    <div
      className="relative flex items-center justify-center h-10 w-10 lg:mt-2  mb-1 mx-auto shadow-lg bg-gray-900 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 cursor-pointer group active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {hoverTooltip && (
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-sm shadow-md text-slate-800 bg-white text-xs font-bold transition duration-1000 scale-100">
            {tooltipText}
        </span>
      )}
    </div>
  );
};
export default SideBar;