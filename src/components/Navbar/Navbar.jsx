import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdFavorite } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import BookstoreLogo from '../../Data/assets/bookstoreLogo.jpg'


const Navbar = () => {
  const addtocartData = useSelector((state) => state.product.addtocartArray);
  const likedcarts = useSelector((state) => state.product.likecartArray);

  const [openmenue, setopenmenue] = useState(false);
  return (
    <nav class="bg-slate-50  text-black fixed z-50  shadow-md w-full">
      <div class="mx-auto max-w-[1350px] px-4 sm:px-6 md:px-16 lg:px-10 xl:px-0 ">
        <div class="relative flex h-16 items-center justify-between">


       <div class="flex flex-1 flex-row justify-between items-center">

            <Link to="/" class="flex flex-shrink-0 items-center cursor-pointer">
              <img
                class="h-12 w-auto"
                src={BookstoreLogo}
                alt="Your Company "
              />
            </Link>


            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link
                  to="/"
                  class="rounded-md px-3 border-2 border-dotted border-gray-400 py-2 text-sm font-medium text-black hover:bg-blue-700 hover:text-white"
                  aria-current="page"
                >
                  Explore
                </Link>

                <Link
                  to="/store"
                  class="rounded-md px-3 py-2 border-2 border-dotted border-gray-400 text-sm font-medium text-black hover:bg-blue-700 hover:text-white"
                >
                  Book Store
                </Link>
                <Link
                  to="/dashboard"
                  class="rounded-md px-3 py-2 text-sm font-medium  border-2 border-dotted border-gray-400 text-black hover:bg-blue-700 hover:text-white"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <div className="flex flex-row gap-5 md:gap-10">

              <div className="flex flex-row gap-5 items-center">
                <Link to="/addtocart" className="relative">
                  <div className="w-5 h-5 -top-3 -right-1 animate-bounce text-center text-white rounded-full absolute bg-green-400 ">
                    {addtocartData.length}
                  </div>
                  <FaCartArrowDown className="text-blue-700 text-2xl z-50" />
                </Link>

                <Link to="/likecart" className="relative">
                  <div className="w-5 h-5 -top-3 -right-1 text-center animate-ping text-white rounded-full absolute bg-green-400 ">
                    {likedcarts.length}
                  </div>
                    <MdFavorite className="text-blue-700 text-2xl " />
                </Link>
              </div>

              <div className="hidden sm:block">
                <Link to='/signup'>
                  <button  class="p-1  px-3 rounded-lg border-2 border-blue-700  bg-blue-700 text-emerald-50 shadow-lg  hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600">
                    Signup
                  </button>
                </Link>
                <button class="p-1 hidden  px-3 rounded-lg border-2  border-blue-700 bg-blue-700 text-emerald-50 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600">
                  Login
                </button>
                <button class="p-1 hidden px-3 rounded-lg border-2 border-blue-700 bg-blue-700 text-emerald-50 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600">
                  Logout
                </button>
              </div>

              <div class="relative ml-3">
               <Link to="/dashboard/profile">
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm border-2 border-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
              </div>

              <div class=" inset-y-0  flex items-center sm:hidden">
                {!openmenue ? (
                  <IoMdMenu
                    onClick={() => setopenmenue(!openmenue)}
                    className=" text-black text-3xl"
                  />
                ) : (
                  <RxCross2
                    onClick={() => setopenmenue(!openmenue)}
                    className=" text-black text-3xl"
                  />
                )}
              </div>

            </div>
         </div>
          </div>
        </div>
  
      {/* <!-- Mobile menu --> */}
      <div
        style={openmenue ? { display: "block" } : { display: "none" } }
        className="sm:hidden"
        id="mobile-menu"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <Link to='/' className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-700 hover:text-white"
            aria-current="page"
          >
            Explor
          </Link>
        
          <Link to='/store' class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-700 hover:text-white"
          >
            Book Store
          </Link>
          <Link to='/dashboard' class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-700 hover:text-white"
          >
            Your Profile
          </Link>
        </div>
      </div>


    </nav>
  );
};
export default Navbar;
