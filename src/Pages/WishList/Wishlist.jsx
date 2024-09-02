import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addproductDetails,
  deletefromlike,
  Setaddtocart,
} from "../../Redux/productSlice";
import { useNavigate } from "react-router-dom";
import PopUp from "../../components/Popup/PopUp";

const Wishlist = () => {
  const likedcarts = useSelector((state) => state.product.likecartArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onclickOnProduct = (product) => {
    console.log("clicked product is there", product);
    dispatch(addproductDetails(product));
    navigate("/productdetail");
  };
  
  return (
    <section>
      {
      !likedcarts.length > 0 ? (
        <PopUp />
      ) : (
        <div className="w-full bg-gray-100 h-full pt-20">
          <div className=" h-full min-h-screen w-[80%]  mx-auto">
            <div className="pt-12 grid grid-cols-1 items-center gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
              {likedcarts.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-lg bg-white shadow-md p-2"
                >
                  <div
                    onClick={() => onclickOnProduct(product)}
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden  lg:aspect-none group-hover:opacity-75 lg:h-80"
                  >
                    <img
                      alt={product.image}
                      src={product.image}
                      className="h-full w-full  object-center lg:h-full lg:w-full mix-blend-multiply"
                    />
                  </div>

                  <div className=" flex flex-col justify-between  p-2">
                    <div
                      onClick={() => onclickOnProduct(product)}
                      className="mt-4 p-2"
                    >
                      <h3 className=" text-gray-700 text-xl line-clamp-1">
                        {product.title}
                      </h3>
                      <span className="flex flex-row justify-between">
                        <p className="mt-1 text-sm text-gray-500">
                          {product.author}
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {product.price}$
                        </p>
                      </span>
                    </div>
                    <div className="flex flex-row justify-between items-center mb-4 ">
                      <button
                        onClick={() => dispatch(Setaddtocart(product))}
                        className="text-sm bg-blue-400 hover:bg-blue-600 text-white px-3 py-0.5 rounded-full"
                      >
                        Add-to Cart
                      </button>
                      <button
                        onClick={() => dispatch(deletefromlike(product))}
                        className="text-sm bg-blue-400 hover:bg-blue-600 text-white px-3 py-0.5 rounded-full"
                      >
                        Dislike
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Wishlist;
