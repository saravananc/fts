import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const sidebarLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/courses", text: "Courses" },
    { href: "/benefits", text: "Benefits" },
    { href: "/contact", text: "Contact" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrowClick = () => {
    const nextIndex = (currentIndex + 1) % sidebarLinks.length;
    setCurrentIndex(nextIndex);
    navigate(sidebarLinks[nextIndex].href);
  };

  const handleLeftArrowClick = () => {
    const prevIndex = currentIndex === 0 ? sidebarLinks.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    navigate(sidebarLinks[prevIndex].href);
  };

  return (
    <>
      {/* side-lg-starts */}
      <div className="mx-auto">
        <button
          onClick={() => navigate("/contact")}
          className="rounded-lg border-solid border-2 text-sm text-white bg-rose-500 hover:bg-rose-700 hover:shadow-md pl-8 pr-8 py-3"
        >
          Enroll Now
        </button>
      </div>

      <div className="flex flex-col justify-between items-center md:space-y-12 lg:space-y-14 xl:space-y-16">
        {sidebarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="font-semibold hover:text-xl hover:font-normal"
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={handleLeftArrowClick}
          disabled={currentIndex === 0}
          className={`h-8 w-8 rounded-full bg-gray-400 text-white flex items-center justify-center ${
            currentIndex === 0 ? "" : "hover:bg-purple-700"
          }`}
        >
          <Icon icon="ri:arrow-left-line" />
        </button>
        <button
          onClick={handleRightArrowClick}
          disabled={currentIndex === 4}
          className={`h-8 w-8 rounded-full bg-gray-400 text-white flex items-center justify-center ${
            currentIndex === 4 ? "" : "hover:bg-purple-700"
          }`}
        >
          <Icon icon="ri:arrow-right-line" />
        </button>
      </div>

      {/* Admin button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 ">
        <button
          onClick={() => {
            window.location.pathname = "/admin";
          }}
          className="skew-y-12  rounded-full text-sm text-white bg-rose-300 hover:bg-rose-700 hover:shadow-md pt-8 pb-8 py-1"
        >
          {/* Button Text */}
          <div className="flex flex-col items-center p-2 font-bold">
            <span>A</span>
            <span>D</span>
            <span>M</span>
            <span>I</span>
            <span>N</span>
          </div>
        </button>
      </div>
      {/* side-lg-ends */}
    </>
  );
};

export default SideBar;
