import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { sideBarContent } from "../../constants";
import { IoMenu, IoClose } from "react-icons/io5";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-full lg:hidden"
      >
        {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-[1000] bg-gray-800 text-white shadow-md transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-[300px] lg:flex lg:flex-col lg:items-center lg:py-4 lg:px-2`}
      >
        <h2 className="logo mb-8 text-center font-extrabold text-2xl">
          NoteWise
        </h2>

        <ul className="flex flex-col w-full">
          {sideBarContent.map((option, i) => (
            <NavLink
              to={option.route}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-700 text-white font-bold"
                    : "text-gray-300 hover:bg-gray-600"
                }`
              }
              key={i}
            >
              <span className="bg-blue-500 p-2 rounded-md">{option.icon}</span>
              <span>{option.label}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
