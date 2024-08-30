import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {newUpcommingBook} from '../../Data/data'

const UpcommingBook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
   


  return (
    <div>
        <p className='text-4xl my-5 text-center'>Upcomming Book</p>
        <div className='flex justify-center mt-10'>
              <div className='w-[90vw] gap-20'>
              <Slider {...settings} >  
                {
                  newUpcommingBook.map((data,index)=>{
                      return(
                          <div key={index}>
                            <div className=' flex flex-col mx-5 border-2 rounded-lg overflow-hidden ' >
                                <div >
                                    <img className='h-[10rem] w-[100%]' src={data.image} alt="" />
                                </div>
                                <div className='p-2'>
                                    <p className='font-bold text-xl line-clamp-1'>{data.title}</p>
                                    <p>{data.author}</p>
                                </div>
                                <p className='p-2'>{data.price}$</p>
                            </div>
                          </div>
                      )
                  })  
                }
              </Slider>
              </div>
        </div>
    </div>
  )
}

export default UpcommingBook