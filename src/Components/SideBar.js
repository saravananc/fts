import { Icon } from "@iconify/react";

const SideBar = () => {
  return (
    <>
     
      {/* side-lg-starts */}

      <div>
        <button className="rounded-lg border-solid border-2 text-sm border-rose-300 hover:border-rose-400 text-rose-600 hover:text-rose-700 bg-gray-100 py-3 pl-8 pr-8 md:w-full h-15">
          Enroll Now
        </button>
      </div>

      <div className="flex flex-col justify-between items-center md:space-y-12 lg:space-y-14 xl:space-y-16">
        <a
          href="/"
          className="font-semibold hover:text-3xl hover:font-normal"
        >
          Home
        </a>
        <a
          href="/about"
          className="font-semibold hover:text-3xl hover:font-normal"
        >
          About
        </a>
        <a
          href="/courses"
          className="font-semibold hover:text-3xl hover:font-normal"
        >
          Courses
        </a>
        <a
          href="/benefits.html"
          className="font-semibold hover:text-3xl hover:font-normal"
        >
          Benefits
        </a>
        <a
          href="/contact.html"
          className="font-semibold hover:text-3xl hover:font-normal"
        >
          Contact
        </a>
      </div>

      <div className="flex justify-evenly">
        <button className="h-8 w-8 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-purple-700">
          <Icon icon="ri:arrow-left-line" />
        </button>
        <button className="h-8 w-8 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-purple-700">
          <Icon icon="ri:arrow-right-line" />
        </button>
      </div>

      {/* side-lg-ends */}
    </>
  );
};
export default SideBar;
