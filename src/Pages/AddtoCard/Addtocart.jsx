import React, { useState } from "react";
import { MdDelete, MdElectricMoped } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PopUp from "../../components/Popup/PopUp";
import { deletefromcart } from "../../Redux/productSlice";

const Addtocart = () => {
  const [count, setcount] = useState(0);
  const addtocartData = useSelector((state) => state.product.addtocartArray);
  const dispatch=useDispatch();
  console.log("add to cart array", addtocartData);
  const decrement=()=>{
    if (count>1) {
      setcount(count-1);
    }
  }
  return (
    <div>
      {addtocartData.length > "0" ? (
        <div class="bg-gray-100 h-full min-h-screen py-8">
          <div class="container mx-auto px-2 md:px-4">
            <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
              {/*added carts section*/}

              <div class=" md:w-3/4 ">
                <div class="bg-white rounded-lg shadow-md p-3 md:p-6 mb-4  overflow-x-scroll md:overflow-auto">
                  <table class="w-full min-w-max ">
                    <thead>
                      <tr>
                        <th class="text-left font-semibold">Sr.</th>
                        <th class="text-center font-semibold ">Product</th>
                        <th class="text-left font-semibold">Price</th>
                        <th class="text-center font-semibold">Quantity</th>
                        <th class="text-left font-semibold">Total</th>
                        <th class="text-center font-semibold">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addtocartData.map((data, index) => {
                        return (
                          <tr key={data.id}>
                            <td class="py-4">{index + 1}</td>
                            <td class="py-4 min-w-min">
                              <div class="flex items-center">
                                <img
                                  class="h-16 w-16 mr-4"
                                  src={data.image}
                                  alt="Product image"
                                />
                                <span class="font-semibold ">{data.title}</span>
                              </div>
                            </td>
                            <td class="py-4">{data.price}</td>
                            <td class="py-4">
                              <div class="flex items-center justify-center">
                                <button
                                  onClick={decrement}
                                  class="border rounded-md  px-2 mr-1 sm:py-1 sm:px-3 sm:mr-1 md:py-2 md:px-4 md:mr-2"
                                >
                                  -
                                </button>
                                <span class="text-center w-4 sm:w-6 md:w-8">
                                  {count}
                                </span>
                                <button
                                  onClick={() => setcount(count + 1)}
                                  class="border rounded-md px-2 mr-1 sm:py-1 sm:px-3 sm:mr-1 md:py-2 md:px-4 md:mr-2"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td class="py-4">$19.99</td>
                            <td class="py-4 text-center">
                              <button onClick={()=>dispatch(deletefromcart(data))} className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white">
                                <MdDelete />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* payment summury */}

              <div class="md:w-1/4 ">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-lg font-semibold mb-4">Summary</h2>
                  <div class="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>$19.99</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>$1.99</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$0.00</span>
                  </div>
                  {/* <hr class="my-2"> */}
                  <div class="flex justify-between mb-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">$21.98</span>
                  </div>
                  <Link
                    to="/placeorder"
                    class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PopUp />
      )}
    </div>
  );
};
export default Addtocart;
