import React from "react";
import { MdDelete, MdEdit, MdModeEdit } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { productsdata } from "../../../../Data/data";
const Bookmanagement = () => {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto overflow-y-auto h-[100vh] hide-scroll-bar sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full">
          <div class="overflow-hidden shadow-sm rounded-md">
            <table class="min-w-full ">
              <thead class="bg-gray-100 border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Sr.
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price 
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Delete 
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Edite 
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {productsdata.map((el, index) => {
                  return (
                    <tr key={index} style={index % 2 === 0 ? { backgroundColor: 'white' } : null} class="bg-gray-100 border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {el?.title}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {el?.author}
                      </td> 
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {el?.category}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {el?.price}$
                      </td>
                      <td className="border  text-center">
                        <button className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white">
                          <MdDelete />
                        </button>
                      </td>
                      <td className="border  text-center">
                        <button className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white">
                          <MdEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmanagement;




