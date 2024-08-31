import React from 'react'

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
            <div className='flex flex-col md:w-1/2 justify-center py-12 items-center '>
                <h1 className=' text-3xl sm:text-5xl lg:text-6xl text-start'>
                Bookshop landing Page
                </h1>
                <h1 className='mt-5 md:mt-8 lg:ml-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et doloremque sed a repellat possimus ullam quaerat iusto delectus quas lorem dolorum!
                </h1>
                <div className='flex gap-5 mt-5 md:mt-8'>
                    <span>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum dolor.</p>
                    </span>
                    <span>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum dolor.</p>
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
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
                    </SwiperSlide>        
                    <SwiperSlide>
                        <img className=' object-container h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKqnd5qLWOGUqcWevFeEsAiJI0Kgx7NX1pQ&s" alt="" />
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
            {/* <Review/> */}
            <Faqs/>
            <Footer/>
        </div>

    </section>
  )
}

export default Home


