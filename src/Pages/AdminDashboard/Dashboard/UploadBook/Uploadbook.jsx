import React, { useState } from 'react'
import { data, productsdata } from '../../../../Data/data';
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { CgClose } from "react-icons/cg";


const Uploadbook = () => {
  const [popup,setpopup]=useState(false)
  return (
    <main>
      <div className='flex flex-row justify-between px-5 mt-8'>
         <p>Uploaded Book By Seller</p>
         <button onClick={()=>setpopup(!popup)} className="px-3 py-2 bg-blue-400 text-white mb-10 hover:bg-blue-500 flex items-center justify-center gap-1">
             <p className="font-semibold">Upload Product</p>
          </button>
      </div>
      <div>
            <div className=" h-[100vh] overflow-y-scroll">
            <div className="mt-6  grid grid-cols-1 items-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {productsdata.map((product) => (
                <div key={product.id} className="group relative rounded-lg">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        alt={product.image}
                        src={product.image}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                    </div>

                    <div className=" flex flex-col justify-between bg-blue-100 p-2">
                    <div className="mt-4 p-2">
                        <h3 className=" text-gray-700 text-xl line-clamp-1">
                        {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                        {product.author}
                        </p>
                    </div>

                    <div className="flex flex-row justify-between items-center ">
                        <p className="text-sm font-medium text-gray-900">
                        {product.price}$
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
      </div>

          {/* >>>>>>>>>>> ---- product upload ----->>>>>>>> */}
          <div>
            {
              popup && (
                    <div className="fixed w-full  h-full bg-slate-200 bg-opacity-90  top-0 left-0 right-0 bottom-0 flex justify-center items-center">

                      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">

                        <div className="flex justify-between items-center pb-3">
                          <h2 className="font-bold text-lg">Upload Book</h2>
                          <div className="w-fit ml-auto text-2xl hover:text-Blue-600 cursor-pointer">
                            <CgClose onClick={()=>setpopup(!popup)}/>
                          </div>
                        </div>

                        <form
                          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
                          // onSubmit={handleSubmit}
                        >
                          <label htmlFor="productName">Title :</label>
                          <input
                            type="text"
                            id="productName"
                            placeholder="enter product name"
                            name="productName"
                            value={data.productName}
                            // onChange={handleOnChange}
                            className="p-2 bg-slate-100 border rounded"
                            required
                          />

                          <label htmlFor="brandName" className="mt-3">
                            Author Name :
                          </label>
                          <input
                            type="text"
                            id="brandName"
                            placeholder="enter brand name"
                            value={data.brandName}
                            name="brandName"
                            // onChange={handleOnChange}
                            className="p-2 bg-slate-100 border rounded"
                            required
                          />

                          <label htmlFor="category" className="mt-3">
                            Category :
                          </label>
                          <select
                            required
                            value={data.category}
                            name="category"
                            // onChange={handleOnChange}
                            className="p-2 bg-slate-100 border rounded"
                          >
                            <option value={""}>Select Category</option>
                            {data.map((el, index) => {
                              return (
                                <option value={el.value} key={el.value + index}>
                                  {el.category}
                                </option>
                              );
                            })}
                          </select>

                          <label htmlFor="productImage" className="mt-3">
                            Book Image :
                          </label>
                          <label htmlFor="uploadImageInput">
                            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
                              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                                <span className="text-4xl">
                                  {/* <FaCloudUploadAlt /> */}
                                </span>
                                <p className="text-sm">Upload Book Image</p>
                                <input
                                  type="file"
                                  id="uploadImageInput"
                                  className="hidden"
                                  // onChange={handleUploadProduct}
                                />
                              </div>
                            </div>
                          </label>

                          <label htmlFor="price" className="mt-3">
                            Price :
                          </label>
                          <input
                            type="number"
                            id="price"
                            placeholder="enter price"
                            value={data.price}
                            name="price"
                            // onChange={handleOnChange}
                            className="p-2 bg-slate-100 border rounded"
                            required
                          />

                          <label htmlFor="description" className="mt-3">
                            Description :
                          </label>
                          <textarea
                            className="h-28 bg-slate-100 border resize-none p-1"
                            placeholder="enter product description"
                            rows={3}
                            // onChange={handleOnChange}
                            name="description"
                            value={data.description}
                          ></textarea>

                          <button className="px-3 py-2 bg-blue-400 text-white mb-10 hover:bg-blue-500 flex items-center justify-center gap-1">
                            <p className="font-semibold">Upload</p>
                          </button>
                        </form>
                      </div>
                    </div>
              )
            }
          </div>
    </main>
  )
}

export default Uploadbook