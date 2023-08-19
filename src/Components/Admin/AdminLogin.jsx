import React from "react";
import { Images } from "../../Images/Images";
import { loginApi } from "../../API";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Please enter a valid email."),
    password: yup
    .string()
    .required("password is required."),
});
const AdminLogin =() =>
{
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const navigate = useNavigate();

const onSubmit = (data) => {
  loginApi(data)
    .then((responseData,failed) => {
      console.log(responseData,failed);
      if (responseData) {
        localStorage.setItem("accesstoken", responseData.accesstoken); 
        localStorage.setItem("refreshtoken",responseData.refreshtoken);
        localStorage.setItem("accessTokenExpires",responseData.accessTokenExpires); 
        navigate("/admin/dashboard");
      } else {
        console.error("Login failed.");
      }
    })
    .catch((error) => {
      console.error(error);
      // console.log(error.toString()?.split(":")[1])
    });
};

    return(
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Images.Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                   {...register("email")}
                  type="email"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                  {errors.email && (
                          <span className="text-red-600">{errors.email.message}</span>
                        )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  {...register("password")}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
                    {errors.password && (
                          <span className="text-red-600">{errors.password.message}</span>
                        )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isDirty && !isValid}
                className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Sign in
              </button>
            </div>
          </form>  
        </div>
      </div>

        </>
    );
};

export default AdminLogin;