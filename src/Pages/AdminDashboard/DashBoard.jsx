import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBookOpenReader } from "react-icons/fa6";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineManageAccounts } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Setpopup } from '../../Redux/userSlice';
const DashBoard = () => {
  const dispatch=useDispatch();
  return (
    <div className='bg-lightPrimary flex flex-col md:flex-row '>

       {/* Left section Sidebar------->>>>>>>>>>>>>>>> */}
      <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div class="mb-2 p-4">
          <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">LOGOS</h5>
        </div>
        
        <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <Link to='/dashboard' role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
            <FaHome />
            </div>
               Main Dashboard
          </Link>


          <Link to='/dashboard/profile' role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
            <CgProfile/>
            </div>Profile
          </Link >


          <Link to='/dashboard/uploadbook' role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
            <BsFillCloudUploadFill />
            </div>Upload Book
          </Link>


          <Link to='/dashboard/bookmanage' role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
               <FaBookOpenReader/>
            </div>Manage Book
          </Link>

          <Link to='/dashboard/manageuser' role="button" tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
            <MdOutlineManageAccounts />
            </div>Manage user
          </Link>

          <Link onClick={()=>dispatch(Setpopup())} tabindex="0" class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
             <AiOutlineLogout />
            </div>Log Out
          </Link>
        </nav>
      </div>

       {/* Left section Sidebar right sidebarr------->>>>>>>>>>>>>>>> */}
       <div>
           <Outlet/>
       </div>
    </div>
  )
}

export default DashBoard