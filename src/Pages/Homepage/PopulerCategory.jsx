import React from "react";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";

const PopulerCategory = () => {
  return (
    <Link to='/store' className=" p-4 sm:p-12">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center mt-12 flex flex-col justify-center">
        Category
      </h2>
      <div class="flex overflow-x-scroll pb-10  hide-scroll-bar mt-10 mx-auto">
        <div class="flex flex-nowrap">
          {data.map((items, index) => {
            return (
              <div key={index} class="inline-block px-3">
                <div className="bg-blue-100 w-44 h-44 max-w-xs flex flex-col items-center justify-around overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img src={items.image} alt="" className="object-cover object-center scale-125 mix-blend-multiply"/>
                  <p>{items.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default PopulerCategory;
