import React from 'react'
import { paymentDetaildata } from '../../../../Data/data';
import rohit from '../../../../Data/assets/rohit.jpg'
const Paymentdetail = () => {
  return (
    <div class="flex flex-col">
    <div class="overflow-x-auto overflow-y-auto h-[100vh] hide-scroll-bar sm:mx-0.5 lg:mx-0.5">
      <div class="py-2 inline-block min-w-full">
        <div class="overflow-hidden shadow-sm rounded-md">
          <table class="min-w-full">
            <thead class="bg-gray-100 border-b ">
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
                  Image
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  UserName
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  BookName
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date 
                </th> 
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Status 
                </th>
              </tr>
            </thead>
            <tbody className="">
              {paymentDetaildata.map((el, index) =>{
                return (
                  <tr key={index} style={index % 2 === 0 ? { backgroundColor: 'white' } : null} class="bg-gray-100 border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img src={rohit} alt="" className='h-10 w-10 rounded-full' />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {el?.name}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {el?.bookName}
                    </td> 
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {el?.date}
                    </td>
                    <td style={{color:`${el.color}`}} class="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {el?.paymentStatus}
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
  )
}

export default Paymentdetail