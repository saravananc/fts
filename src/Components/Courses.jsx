import { Images } from "../Images/Images";

const Courses = () => {
    const courseData = [
        {
          title: "Full Stack Developer",
          image: Images.Fullstact,
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        },
        {
            title: "React js",
            image: Images.React,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
          {
            title: "Node js",
            image: Images.Node,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
          {
            title: "Java",
            image: Images.Java,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
          {
            title: "Devops",
            image: Images.Fullstact,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
          {
            title: "UI/UX",
            image: Images.Java,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
          {
            title: ".NET",
            image: Images.React,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
          {
            title: "Figma",
            image: Images.Node,
            description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          },
        
      ];
  return (
    <>
      <article className="mt-10">
        <p className="text-black text-2xl md:text-4xl ">Our Courses</p>
        <p className="line-clamp-3 mt-3 text-sm md:text-lg">
          Our courses at FTS Academy are taught by industry experts, ensuring
          that you receive valuable insights <br />
          and guidance from professionals who have hands-on experience in the
          field.
        </p>
      </article>
      <div className="grid gap-4 md:grid-cols-4 my-16">
      {courseData.map((course, index) => (
        <div
          key={index}
          className="block max-w-sm p-5 bg-indigo-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative group cursor-pointer"
        >
          <img className="mx-auto" src={course.image} alt={course.title} />
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {course.title}
          </h5>
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
            {course.description}
          </p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="px-4 py-2 text-sm text-white bg-rose-600 rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
      

    </>
  );
};

export default Courses;
