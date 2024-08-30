import { Link, useNavigate } from "react-router-dom"
import { productsdata } from "../../Data/data"
import { addproductDetails } from "../../Redux/productSlice"
import { useDispatch } from "react-redux"

  export default function BestsellerCards() {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const clickandonmove=(product)=>{
      if (product) {
        console.log("ask",product)
          dispatch(addproductDetails(product))
          navigate("/productdetail")
      }
    }
    return (
      <Link  className="bg-white flex justify-center w-full">
        <div className="mx-auto w-[96%]  py-16  sm:py-24 sm:w-[90%] ">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">Best Seller</h2>
          <div class="flex overflow-x-scroll pb-10 hide-scroll-bar mt-10 mx-auto">
          <div class="flex flex-nowrap gap-10">
            {productsdata.map((product) =>(
              <div key={product.id} onClick={()=>clickandonmove(product)} className=" rounded-lg w-[20rem] shadow-md overflow-hidden relative  ">
                <div className="h-6 bg-yellow-300 -left-28 top-0 absolute -rotate-45 w-[25rem] ">
                   <p className="z-40  text-black ">New</p>
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden p-4 bg-gray-100 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.image}
                    src={product.image}
                    className="h-full w-full object-cover object-center lg:h-full rounded-md lg:w-full"
                  />
                </div>

                <div className=" flex justify-between bg-gray-100 items-start p-4">
                  <div className=" p-2"> 
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.author}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          </div>


        </div>
      </Link >
    )
  }