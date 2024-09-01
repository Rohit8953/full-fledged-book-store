import React from 'react'
import { GoCheckCircle } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import PopulerCategory from './PopulerCategory';

import UpcommingBook from './UpcommingBook';
import FeaturedBook from './FeaturedBook';
import Footer from './Footer';
import Faqs from './Faqs';
import Review from './Review';
import BestsellerCards from '../../components/Cards/BestsellerCards';


const Home = () => {
  return (
    <section className=''>
        <div style={{ backgroundImage: "radial-gradient(#7AD7F7, #92DFF3, #B7E9F7, #DBF3FA, #F5FCFF)"}} className= ' min-h-screen  h-full '>
            <div className='flex flex-col justify-center md:flex-row items-center min-h-screen w-[90%] h-full mx-auto'>
            {/* Left section */}
            <div className='flex flex-col md:w-1/2 justify-center py-12 items-startr '>
                <h1 className=' text-3xl sm:text-5xl lg:text-6xl text-start'>
                Bookshop landing Page
                </h1>
                <h1 className='mt-5 md:mt-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et doloremque sed a repellat possimus ullam quaerat iusto delectus quas lorem dolorum!
                </h1>
                <div className='flex gap-5 mt-5 md:mt-8 text-start'>
                    <span>
                        <span className='flex flex-row items-center gap-2 '>
                          <GoCheckCircle className='' />
                          <p> Lorem, ipsum dolor.</p>
                        </span>
                        <span className='flex flex-row items-center gap-2 '>
                          <GoCheckCircle className='' />
                          <p> Lorem, ipsum dolor.</p>
                        </span>
                    </span>
                    <span>
                        <span className='flex flex-row items-center gap-2 '>
                          <GoCheckCircle className='' />
                          <p> Lorem, ipsum dolor.</p>
                        </span>
                        <span className='flex flex-row items-center gap-2 '>
                          <GoCheckCircle className='' />
                          <p> Lorem, ipsum dolor.</p>
                        </span>
                    </span>
                </div>
            </div>
            {/* Right section */}
            <div className='flex md:w-1/2 justify-center md:py-10 items-center '>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className=' object-container h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiU_RKhOVP2men2nKvm50CZQXEQcUlGQDPLaVX9tzy1zGT85nAg2dsrKx3yKgN-wTRvzc&usqp=CAU" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://media.npr.org/assets/img/2021/08/13/711gd93ifkl_custom-80dd66e555a05cf605f043ca0095760a75d41be4.jpeg?s=1100&c=50&f=jpeg" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://img.freepik.com/free-psd/artificial-intelligence-template-design_23-2151667292.jpg" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://cdn.venngage.com/template/thumbnail/full/2e59bad6-fc8e-4f86-9802-4b83f70b3f88.webp" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://bookcover4u.com/pro/SCI-FI-book-cover-design-space-marine-starship-science-fiction-woman-armor-nova-blaster-S1590905106B.jpg" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_316,h_475/https://discoverscifi.com/wp-content/uploads/2020/07/53903234._SY475_.jpg" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://orion-uploads.openroadmedia.com/md_8313d2a37feb-10-sci-fi-books-that-explore-deep-space_to-sleep-in-a-sea-of-stars.jpg" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://images-platform.99static.com//BnAvYayKi_tJw3s_e-yIhdVvNCU=/0x0:1999x1999/fit-in/500x500/projects-files/46/4689/468949/d33af487-8d7b-45af-8a95-2fdbdadbfab8.jpg" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpZOdgkNYGxb0np99oxkXJqe4TW4xMD_r1w&s" alt="" />
                    </SwiperSlide>        
                    
                </Swiper>
            </div>

            </div>
        </div>
        <div>
            <PopulerCategory/>
            <BestsellerCards/>
            <UpcommingBook/>
            <FeaturedBook/>
            <Review/>
            <Faqs/>
            <Footer/>
        </div>

    </section>
  )
}

export default Home


