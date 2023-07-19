import { Images } from "../Images/Images";

const Contact = () => {
  return (
    <>
      <article className="mt-10">
        <p className="text-lg text-rose-600">Contact us</p>
        <p className="text-black text-2xl md:text-4xl ">Get In Touch</p>
        <p className="line-clamp-3 mt-3 text-sm md:text-lg">
          Our courses at FTS Academy are taught by industry experts, ensuring
          that you receive valuable insights <br />
          and guidance from professionals who have hands-on experience in the
          field.
        </p>
      </article>
      <div className="grid gap-2 md:grid-cols-2  bg-slate-100  mt-5 ">
        <div className="flex flex-col  mx-auto md:flex-row ">
          <img
            className="object-cover w-60 lg:w-full h-60 lg:h-full "
            src={Images.Contact}
            alt="contact-us"
          />
        </div>
        <div className="flex flex-col justify-center p-2">
          <form className="flex flex-col mt-5 lg:mt-0">
            <div className="flex flex-col">
              <label className="text-rose-600 text-sm" for="name">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-2 py-3 px-3 bg-white dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-rose-600 text-sm" for="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@test.com"
                className="w-100 mt-2 py-3 px-3 bg-white dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-rose-600 text-sm" for="message">
                Message
              </label>
              <input
                type="mesage"
                name="message"
                id="message"
                placeholder="Enter your message"
                className="w-100 mt-2 py-3 px-3 bg-white dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div className="self-end mt-2">
              <button
                type="submit"
                className="w-32 bg-white hover:bg-rose-dark border border-rose-300 text-rose-600 font-bold text-sm mb-3 py-2 rounded-lg mt-3 hover:bg-white transition ease-in-out duration-300"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
