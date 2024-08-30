import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { costomerReveiw } from "../../Data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white w-full  py-12 md:py-24 overflow-hidden flex justify-center">
      <div className=" mx-auto">
        <h2 className="font-black text-gray-700 text-center text-2xl sm:text-4xl leading-none uppercase max-w-2xl mx-auto mb-12">
          What Listeners Are Saying
        </h2>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  gap-6 relative ">
          <div className=" mx-auto w-[90vw]  space-x-3 gap-5 p-10 ">
            <Slider {...settings}>
              {costomerReveiw.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col bg-gray-200 rounded-lg p-8  text-center w-fit border-2 mb-8  ">
                      <div className="flex flex-row items-center gap-2">
                        <img
                          src={data.image}
                          className="rounded-full h-12 w-12"
                          alt=""
                        />
                        <div className="flex flex-col w-fit">
                          <p class="font-bold text-gray-700 uppercase">
                            {data.username}
                          </p>
                          <div className="h-[2px] bg-gray-600  w-full mx-auto"></div>
                        </div>
                      </div>

                      <p class="text-xl font-light italic text-gray-700 mt-4 md:mt-8">
                        {data.description}
                      </p>
                      <div class="flex items-center justify-center space-x-2 mt-4">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaRegStar className="text-yellow-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
