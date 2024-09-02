import React, { useState } from "react";
import * as Yup from "yup";
import signuppage from '../../Data/assets/signuppage.jpg'
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate=useNavigate();
  const [errors, setErrors] = useState();

  const validationSchema = Yup.object({
    username: Yup.string().required("First Name is Required"),

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
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password didn't match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
      navigate('/login')
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
          <img src={signuppage} alt="" className="object-contain" />
      </div>
      {/* signup form */}
      <div class="flex md:w-1/2 justify-center py-1 md:py-10 items-center md:mt-10 bg-white">
      <form onSubmit={handleSubmit} class="bg-white w-full max-w-xs p-4 md:p-1">
          <h1 class="text-gray-800 font-bold text-2xl ml-1 mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 ml-1 mb-7">Welcome Back</p>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  className="outline-none"
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </div>
              {errors && <div className="text-red-500 mb-3 text-sm font-normal ml-2">{errors.username}</div>}
            </div>

            <div className="flex flex-col">
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
                  className="outline-none bg-white"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              {errors && <div className="text-red-500 mb-3 text-sm font-normal ml-2">{errors.email}</div>}
            </div>

            <div className="flex flex-col">
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
                  className="outline-none bg-white"
                  onChange={handleChange}
                />
              </div>
              {errors && <div className="text-red-500 mb-3 text-sm font-normal ml-2 line-clamp-1">{errors.password}</div>}
            </div>

            <div className="flex flex-col">
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm your password"
                  onChange={handleChange}
                  className="outline-none bg-white"
                />
              </div>
              {errors && <div className="text-red-500 mb-3 text-sm font-normal ml-2 line-clamp-1">{errors.confirmPassword}</div>}
            </div>
          </div>

          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Signup
          </button>
          <span class="text-sm ml-2 mt-1 flex flex-row gap-2 ">
             <p>You have already account</p>
             <Link to='/login' className="text-blue-500 cursor-pointer">Login</Link>
          </span>
      </form>
      </div>
    </div>
  );
};

export default Signup;
