import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import AdminHome from "./AdminHome";
import TotalEnrollList from "./TotalEnrollList";
import { Images } from "../../Images/Images";

const AdminDashboard = () => {
  const sidebarRef = useRef(null);
  const maxSidebarRef = useRef(null);
  const miniSidebarRef = useRef(null);
  const maxToolbarRef = useRef(null);
  const contentRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  }



  const [selectedContent, setSelectedContent] = useState("home"); // Add state for tracking selected content

 

  // Function to handle content selection
  function handleContentSelection(content) {
    setSelectedContent(content);
  }



  // State to track if the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

// Function to handle logout
const handleLogout = () => {
  
  // clear session/local storage, redirect to login page, etc.
};

  return (
    <>
      <div className="fixed w-full z-30 flex bg-[#28235C] dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
        <div className="logo ml-12 text-white dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
          FTS Academy
        </div>

        <div className="grow h-full flex items-center justify-center"></div>
        {/* <div className="flex-none h-full text-center flex items-center justify-center">
          <div className="flex space-x-3 items-center px-3">
            <div className="flex-none flex justify-center">
              <div className="w-8 h-8 flex ">
                <img
                  src={Images.AdminProfile}
                  alt="profile"
                  className="shadow rounded-full object-cover"
                />
              </div>
            </div>

            <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
              Admin
            </div>
          </div>
        </div> */}
        <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex-none h-full text-center flex items-center justify-center focus:outline-none"
      >
        <div className="flex space-x-3 items-center px-3">
          <div className="flex-none flex justify-center">
            <div className="w-8 h-8 flex">
              <img
                src={Images.AdminProfile}
                alt="profile"
                className="shadow rounded-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block text-sm md:text-md text-white dark:text-black">
            Admin
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 bg-white rounded shadow-md">
          <button
            // onClick={handleLogout}
            className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 w-full text-left focus:outline-none"
          >
            Logout
          </button>
          {/* Add other options as needed */}
        </div>
      )}
    </div>
      </div>

      <aside
        ref={sidebarRef}
        className={`w-60 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-48"
        } fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#28235C]`}
      >
        {/* Sidebar content */}
        <div
          ref={maxToolbarRef}
          className={`max-toolbar ${
            isSidebarOpen ? "translate-x-0" : "translate-x-24 scale-x-0"
          } w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#28235C] absolute top-2 rounded-full h-12`}
        >
          <div className="flex pl-4 items-center space-x-2"></div>
          <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white">
            <div className="transform ease-in-out duration-300 mr-12">
              FTS Academy
            </div>
          </div>
        </div>
        <div
          onClick={toggleSidebar}
          className={`${
            isSidebarOpen ? "-right-6" : "-right-6"
          } cursor-pointer transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#28235C] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45`}
        >
          <Icon icon="ep:menu" />
        </div>

        {/* Max sidebar content */}
        <div
          ref={maxSidebarRef}
          className={`max ${
            isSidebarOpen ? "flex" : "hidden"
          } text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}
        >
          <div 
          onClick={() => handleContentSelection("home")}
          className="cursor-pointer hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#28235C] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
            <Icon icon="clarity:home-line" />
            <div>Home</div>
          </div>
          <div
          onClick={() => handleContentSelection("totalEnrollments")}
          className="cursor-pointer hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#28235C] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
            <Icon icon="teenyicons:menu-outline" />
            <div>Total Registrations</div>
          </div>
        </div>

        {/* Mini sidebar content */}
        <div
          ref={miniSidebarRef}
          className={`mini ${
            isSidebarOpen ? "hidden" : "flex"
          } mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]`}
        >
          <div 
          onClick={() => handleContentSelection("home")}
          className="cursor-pointer hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#28235C] p-3 rounded-full transform ease-in-out duration-300 flex">
            <Icon icon="clarity:home-line" />
          </div>
          <div 
          onClick={() => handleContentSelection("totalEnrollments")}
          className="cursor-pointer hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#28235C] p-3 rounded-full transform ease-in-out duration-300 flex">
            <Icon icon="teenyicons:menu-outline" />
          </div>
        </div>
      </aside>

      <div
        ref={contentRef}
        className={`content ${
          isSidebarOpen ? "md:ml-60" : "ml-12"
        } transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 bg-indigo-200`}
      >
        {/* Main content */}
        <div className=" mb-5 -mx-2">
        {selectedContent === "home" && <AdminHome />}
        {selectedContent === "totalEnrollments" && <TotalEnrollList />}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
