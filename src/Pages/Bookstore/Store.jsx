import React, { useEffect, useState } from "react";
import { data, productsdata } from "../../Data/data";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addproductDetails,
  Setaddtocart,
  Setlikecart,
} from "../../Redux/productSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Store = () => {
  const [openclose, setopenclose] = useState(false);
  const [cardData, setData] = useState(productsdata);
  const [sortBy, setSortBy] = useState("");
  const [searchitems, setsearchitems] = useState();
  const [checkedValues, setCheckedValues] = useState([]);

  const navigate = useNavigate();

  const addtocartData = useSelector((state) => state.product.addtocartArray);

  const dispatch = useDispatch();

  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  useEffect(() => {
    if (sortBy === "asc") {
      setData((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sortBy === "dsc") {
      setData((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sortBy]);

  useEffect(() => {
    if (searchitems) {
      console.log("card data", cardData);
      const filterdata = cardData.filter(
        (item) =>
          item.category.toLowerCase().includes(searchitems.toLowerCase()) ||
          item.title.toLowerCase().includes(searchitems.toLowerCase()) ||
          item.author.toLowerCase().includes(searchitems.toLowerCase())
      );

      console.log("data is there", filterdata, searchitems);
      setData(filterdata);
    } else {
      setData(productsdata);
    }
  }, [searchitems]);
 

  // category bassed filter
  const onChecked = (id, value, isChecked) => {
    if (isChecked) {
      setCheckedValues((prev) => {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      });
    } else {
      setCheckedValues((prev) => {
        // Filter out the unchecked value
        return prev.filter((item) => item !== value);
      });
    }
  };

  
  useEffect(() => {
    if (checkedValues.length > 0) {
      const filterdata = productsdata.filter((item) =>
        checkedValues.some((checkedItem) => item.category.includes(checkedItem))
      );
      setData(filterdata);
    } else {
      setData(cardData);
    }
  }, [checkedValues]);

  console.log("add to cart data is there", addtocartData);

  const onclickOnProduct = (product) => {
    dispatch(addproductDetails(product));
    navigate("/productdetail");
  };

const clickaddtocart=(product)=>{
  dispatch(Setaddtocart(product))
  toast.success("Product added in cart")
}

const clickaddtowishlist=(product)=>{
  dispatch(Setlikecart(product))
  toast.success("Product added in wishlist")
}


  return (
    <div>
      <div className="mt-24 mb-3 mx-auto text-gray-600 w-fit flex flex-row justify-between items-center  border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm ">
        <input
          className="focus:outline-none"
          onChange={(e) => setsearchitems(e.target.value)}
          type="search"
          name="search"
          placeholder="Search"
        />
        <FiSearch className="text-gray-500 h-4 w-4" />
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-6">
        {/* left section > filter */}
        <div className="max-w-6xl ml-5 sm:ml-1 sm:mx-auto">
          <form class="mt-4  ">
            <div className="">
              <h3 className="text-base px-4 py-4 uppercase font-medium text-slate-500 border-b border-gray-200">
                Sort by Price
              </h3>

              <form className="text-sm flex flex-col gap-2  px-4 py-6">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="sortBy"
                    checked={sortBy === "asc"}
                    onChange={handleOnChangeSortBy}
                    value={"asc"}
                  />
                  <label className=" whitespace-nowrap  min-w-0 flex-1 text-gray-500">
                    Low to High
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="sortBy"
                    checked={sortBy === "dsc"}
                    onChange={handleOnChangeSortBy}
                    value={"dsc"}
                  />
                  <label className="  whitespace-nowrap  min-w-0 flex-1 text-gray-500">
                    High to Low
                  </label>
                </div>
              </form>
            </div>

            {/* -----> category filter ---> */}
            <div class="border-t border-gray-200 px-4 py-6">
              <h3 class="-mx-2 -my-3 flow-root">
                <button
                  onClick={() => setopenclose(!openclose)}
                  type="button"
                  class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                >
                  <span class="text-base uppercase font-medium text-slate-500 ">
                    Categrory
                  </span>
                  <span>{openclose ? <LuMinus /> : <GoPlus />}</span>
                </button>
              </h3>
              <div
                style={openclose ? { display: "block" } : { display: "none" }}
                class="pt-6"
              >
                <div class="space-y-6">
                  {data.map((data, index) => {
                    return (
                      <div
                        key={index}
                        onChange={(e) =>
                          onChecked(data.id, e.target.value, e.target.checked)
                        }
                        className="flex items-center"
                      >
                        <input
                          id="filter-mobile-color-0"
                          name="color"
                          value={data.category}
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label for="" class="ml-3 min-w-0 flex-1 text-gray-500">
                          {data.category}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* right section > cards */}

        <div className=" h-[100vh] overflow-y-scroll flex justify-center mx-auto">
          <div className="mt-6  grid grid-cols-1 mx-auto items-center justify-center  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {cardData.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gray-50  max-w-xs mx-auto shadow-md rounded-md"
              >
                <div
                  onClick={() => onclickOnProduct(product)}
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  <img
                    alt={product.image}
                    src={product.image}
                    className="h-full w-full  object-center lg:h-full lg:w-full mix-blend-multiply"
                  />
                </div>

                <div className=" flex flex-col justify-between p-2">
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
                      onClick={()=>clickaddtocart(product)}
                      className="text-sm bg-blue-400 hover:bg-blue-600 text-white px-3 py-0.5 rounded-full"
                    >
                      Add-to Cart
                    </button>

                    <button
                      onClick={()=>clickaddtowishlist(product)}
                      className="text-sm bg-blue-400 hover:bg-blue-600 text-white px-3 py-0.5 rounded-full"
                    >
                      WishList
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
