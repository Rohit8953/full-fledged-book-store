import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Signup from '../Pages/SignupAndLogin/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/SignupAndLogin/Login'
import Home from '../Pages/Homepage/Home'
import Store from '../Pages/Bookstore/Store'
import DashBoard from '../Pages/AdminDashboard/DashBoard'
import MainDashboard from '../Pages/AdminDashboard/Dashboard/maindashboard/MainDashboard'
import Uploadbook from '../Pages/AdminDashboard/Dashboard/UploadBook/Uploadbook'
import Bookmanagement from '../Pages/AdminDashboard/Dashboard/manageBook/Bookmanagement'
import UserManagement from '../Pages/AdminDashboard/Dashboard/manageUser/UserManagement'
import Profile from '../Pages/AdminDashboard/Dashboard/Profile/Profile'
import Logout from '../components/LogoutConformation/Logout'
import { useSelector } from 'react-redux'
import Addtocart from '../Pages/AddtoCard/Addtocart'
import Placeorder from '../Pages/PlaceOrder/Placeorder'
import ProductDetail from '../Pages/ProductDetails/ProductDetail'
import Wishlist from '../Pages/WishList/Wishlist'
import MultiStepper from '../Pages/MultiSteppers/MultiStepper'

const Mainpage = () => {
  const popup=useSelector((store)=>store.userdetails.popup);
  console.log("popup",popup)
  return (
      <div className='w-[100%] overflow-hidden'>
        <Navbar/>
         {
          popup &&(
            <Logout/>
          )
         }
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/addtocart' element={<Addtocart/>}/>
            <Route path='/likecart' element={<Wishlist/>}/>
            <Route path='/placeorder' element={<MultiStepper/>}/>
            <Route path='/productdetail' element={<ProductDetail/>}/>  
            <Route path='/dashboard' element={<DashBoard/>}>  
                <Route path='/dashboard' element={<MainDashboard/>}/>
                <Route path='/dashboard/uploadbook' element={<Uploadbook/>}/>
                <Route path='/dashboard/bookmanage' element={<Bookmanagement/>}/>
                <Route path='/dashboard/manageuser' element={<UserManagement/>}/>
                <Route path='/dashboard/profile' element={<Profile/>}/>
            </Route>
        </Routes>
    </div>
  )
}
export default Mainpage;