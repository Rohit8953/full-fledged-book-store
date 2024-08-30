import React from "react";
import { Link } from "react-router-dom";

const PopUp = () => {
  return (
    <div className=" w-full h-full min-h-[100vh] flex items-center justify-center  bg-gray-100">
      <div class=" inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex -mt-20 items-center">
        <div class="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
          <div class="w-full py-2 bg-white cursor-default pointer-events-auto shadow-md  relative rounded-xl mx-auto max-w-sm">

            <div class="space-y-2 p-2">
              <div class="p-4 space-y-2 text-center dark:text-white">
                <h2
                  class="text-xl font-bold tracking-tight"
                  id="page-action.heading"
                >
                  Empty Cart
                </h2>

                <p class="text-gray-500">
                  You have not added any product, please add product first.
                </p>
              </div>
            </div>
            <div class="space-y-2">
              <div
                aria-hidden="true"
                class="border-t dark:border-gray-700 px-2"
              ></div>
              <div class="px-6 py-2">
                <div class="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                  <Link to='/store'class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none  min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:ring-offset-blue-700">
                    <span class="flex items-center gap-1">
                      <span class="">Go Back </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
