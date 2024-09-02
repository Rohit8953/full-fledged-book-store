import React from "react";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";

const PopulerCategory = () => {
  return (
    <div className="w-full flex justify-center  ">
      <div className=" p-4 sm:p-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center mt-12 flex flex-col justify-center">
            Category
          </h2>
        </div>
        <div class="flex overflow-x-scroll pb-10 w-[85%]  hide-scroll-bar px-4  mt-10 mx-auto">
          <div class="flex flex-nowrap">
            {data.map((items, index) => {
              return (
                <Link to='/store' key={index} class="inline-block px-3">
                  <div className="bg-blue-100 w-44 max-w-xs flex flex-col items-center justify-around overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img src={items.image} alt="" className="object-cover  rounded-t-lg object-center scale-125 mix-blend-multiply"/>
                    <p className="py-2 font-semibold">{items.category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerCategory;
