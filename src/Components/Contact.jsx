import React from "react";
import { Images } from "../Images/Images";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactApi } from "../API";


const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters long."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Please enter a valid email."),
  phone_number: yup
    .string()
    .required("Mobile Number is required.")
    .max(10, "Max 10 digits."),
  message: yup
    .string()
    .required("Message is required."),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    contactApi(data)
    .then((data) => {
      // Handle successful API response here
      console.log("API Response:", data);
    })
    .catch((error) => {
      // Handle error here
      console.error("Error:", error);
    });
  };
 
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
          <form className="flex flex-col mt-5 lg:mt-0"onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className="text-rose-600 text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="name"               
                placeholder="Enter Name"
                {...register("name")}
                className="w-100 mt-2 py-3 px-3 bg-inherit dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"               
              />
               {errors.name && (
                          <span className="text-red-600">{errors.name.message}</span>
                        )}
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-rose-600 text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email")}
                className="w-100 mt-2 py-3 px-3 bg-inherit dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
              />
                {errors.email && (
                          <span className="text-red-600">{errors.email.message}</span>
                        )}
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-rose-600 text-sm" htmlFor="mobilenumber">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                {...register("phone_number")}
                className="w-100 mt-2 py-3 px-3 bg-inherit dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
              />
                {errors.phone_number && (
                          <span className="text-red-600">{errors.phone_number.message}</span>
                        )}
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-rose-600 text-sm" htmlFor="message">
              Message
              </label>
              <input
                type="mesage"
                placeholder="Enter Message"
                {...register("message")}
                className="w-100 mt-2 py-3 px-3 bg-inherit dark:bg-gray-800 border border-b-gray-400 dark:border-gray-700 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
              />
                {errors.message && (
                          <span className="text-red-600">{errors.message.message}</span>
                        )}
            </div>
            <div className="self-end mt-2">
              <button
                type="submit"
                disabled={isDirty && !isValid}
                className="w-32 bg-white hover:bg-rose-dark border border-rose-300 text-rose-600 font-bold text-sm  py-2 mb-10 rounded-lg mt-3 hover:bg-white transition ease-in-out duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

     
    </>
  );
};

export default Contact;
