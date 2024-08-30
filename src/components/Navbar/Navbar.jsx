import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdFavorite } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import Booklogo from '../../Data/assets/Booklogo.jpg'

const Navbar = () => {
  const addtocartData = useSelector((state) => state.product.addtocartArray);
  const likedcarts = useSelector((state) => state.product.likecartArray);

  const [openmenue, setopenmenue] = useState(false);
  return (
    <nav class="bg-blue-400 fixed w-full z-50 shadow-md">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {!openmenue ? (
              <IoMdMenu
                onClick={() => setopenmenue(!openmenue)}
                className=" text-white text-2xl"
              />
            ) : (
              <RxCross2
                onClick={() => setopenmenue(!openmenue)}
                className=" text-white text-2xl"
              />
            )}
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src={Booklogo}
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link
                  to="/"
                  class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Explore
                </Link>
                <Link
                  to="/"
                  class="rounded-md  px-3 py-2   text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
                <Link
                  to="/store"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Book Store
                </Link>
                <Link
                  to="/dashboard"
                  class="rounded-md px-3 py-2 text-sm font-medium   text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="p-1  px-3 rounded-lg border-2 border-emerald-600  bg-emerald-500 text-emerald-50 shadow-lg  hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
              Signup
            </button>
            <button class="p-1 hidden  px-3 rounded-lg border-2  border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
              Login
            </button>
            <button class="p-1 hidden px-3 rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
              Logout
            </button>

            <div className="flex flex-row gap-1">
              <Link to="/addtocart" className="relative">
                <div className="w-5 h-5 -top-3 -right-1 animate-bounce text-center text-white rounded-full absolute bg-green-600 ">
                  {addtocartData.length}
                </div>
                <FaCartArrowDown className="text-blue-500 text-2xl z-50" />
              </Link>

              <Link to="/likecart" className="relative">
                <div className="w-5 h-5 -top-3 -right-1 text-center animate-ping text-white rounded-full absolute bg-green-600 ">
                  {likedcarts.length}
                </div>
                <MdFavorite className="text-blue-500 text-2xl " />
              </Link>
            </div>

            {/* <!-- Profile dropdown --> */}
            <div class="relative ml-3">
              <Link to="/dashboard/profile">
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt=""
                  />
                </button>
              </Link>

              <div
                class="absolute hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu --> */}
      <div
        style={openmenue ? { display: "block" } : { display: "none" }}
        className="sm:hidden"
        id="mobile-menu"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Explor
          </a>
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Book Store
          </a>
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Your Profile
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
