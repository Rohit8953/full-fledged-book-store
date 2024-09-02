import React, { useState } from "react";
import * as Yup from "yup";
import loginpage from '../../Data/assets/loginpage.jpg'
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState();

  const validationSchema = Yup.object({


    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data=await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData,data);
      navigate("/")
    } catch (error) {
      const newErrors = {};
      console.log("error is there", error);

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div class=" h-full md:h-screen md:flex md:justify-around ">
      <div className=" w-full sm:w-[70%] md:w-1/2 mt-12 md:mt-0 mx-auto  flex flex-row justify-center items-center">
        <img src={loginpage} alt="" className=" object-contain" />
      </div>

      <div class="flex md:w-1/2 justify-center py-1 md:py-10 items-center bg-white">
        <form onSubmit={handleSubmit} class="bg-white w-full max-w-xs p-4 md:p-1">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex flex-col gap-3 max-w-lg">
            <div className="flex flex-col max-w-lg">
              <div class="flex items-center border-2 py-2 px-3 w-full  rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  type="email"
                  name="email"
                  className="outline-none w-full"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              {errors && <div className="text-red-500 mb-3 text-sm font-normal ml-2">{errors.email}</div>}
            </div>

            <div className="flex flex-col">
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  className="outline-none"
                  onChange={handleChange}
                />
              </div>
              {errors && <div className="text-red-500 mb-3 text-sm font-normal ml-2">{errors.password}</div>}
            </div>
          </div>
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
          <br />
          <span class="text-sm ml-2 mt-1 flex flex-row gap-2 ">
             <p>Create account</p>
             <Link to='/signup' className="text-blue-500 cursor-pointer">Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default Signup;
