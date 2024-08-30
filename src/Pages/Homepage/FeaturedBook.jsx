import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredbook } from "../../Data/data";

const FeaturedBook = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-200 mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-10 sm:text-4xl ">Featured Book</h2>
      <div className="w-[100%]">
        <Slider {...settings}>
          {featuredbook.map((data, index) => {
            return (
              <div key={index}>
                <div
                  style={{ background: data.bg }}
                  className="h-[30rem] flex flex-row items-center justify-around gap-4 p-2"
                >
                  <div className="">
                    <img src={data.image} alt="" className="h-[20rem] w-[20rem] md:h-[30rem] mix-blend-multiply"/>
                  </div>

                  <div className=" flex flex-col w-[40rem] ">
                    <p className="text-xl md:text-4xl line-clamp-1 ">{data.title}</p>
                    <div className="bg-blue-500 h-1 w-28 mt-6"></div>
                    <p className="mt-2">{data.author}</p>
                    <p className="mt-3">{data.topic}</p>
                    <p className="mt-3">{data.description}</p>
                    <p className="mt-3">${data.price}</p>
                    <button className="bg-white mt-6 w-fit p-2 border-2 rounded-3xl px-10 hover:bg-blue-400 hover:text-white transition-all duration-300">
                      VIEW MORE
                    </button>
                  </div>
                </div>
                
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default FeaturedBook;
