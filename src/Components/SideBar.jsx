import { Icon } from "@iconify/react";

const SideBar = () => {
  return (
    <>
      {/* side-lg-starts */}
      <div className="mx-auto">
        <button className="rounded-lg border-solid border-2 text-sm text-white bg-rose-500 hover:bg-rose-700 hover:shadow-md pl-8 pr-8 py-3">
          Enroll Now
        </button>
      </div>

      <div className="flex flex-col justify-between items-center md:space-y-12 lg:space-y-14 xl:space-y-16">
        <a
          href="/"
          className="font-semibold hover:text-xl hover:font-normal"
        >
          Home
        </a>
        <a
          href="/about"
          className="font-semibold hover:text-xl hover:font-normal"
        >
          About
        </a>
        <a
          href="/courses"
          className="font-semibold hover:text-xl hover:font-normal"
        >
          Courses
        </a>
        <a
          href="/benefits"
          className="font-semibold hover:text-xl hover:font-normal"
        >
          Benefits
        </a>
        <a
          href="/contact"
          className="font-semibold hover:text-xl hover:font-normal"
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

      {/* Additional button */}
    
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
