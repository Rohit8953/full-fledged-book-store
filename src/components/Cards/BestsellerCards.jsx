const products = [
  {
    id:'1',
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    category: "Fiction",
    description: "A classic novel set in the Roaring Twenties, telling the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },
  {
    id:'3',
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 25.50,
    category: "Programming",
    description: "A deep dive into the best features of JavaScript, covering syntax, objects, functions, inheritance, and more.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "Out of Stock"
  },
  {
    id:'4',
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.99,
    category: "Biography",
    description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States, Michelle Obama.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },
  {
    id:'5',
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 16.99,
    category: "Business",
    description: "A guide to starting and managing successful startups with a focus on rapid prototyping and customer feedback.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },
  {
    id:'6',
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    category: "Fiction",
    description: "A novel about the serious issues of race and rape, told through the eyes of young Scout Finch in the 1930s South.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },
  {
    id:'7',
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 29.99,
    category: "Programming",
    description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },{
    id:'7',
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 29.99,
    category: "Programming",
    description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },{
    id:'7',
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 29.99,
    category: "Programming",
    description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },{
    id:'7',
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 29.99,
    category: "Programming",
    description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock"
  },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white flex justify-center w-full">
        <div className="mx-auto w-[96%]  py-16  sm:py-24 sm:w-[90%] ">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">Best Seller</h2>
          <div class="flex overflow-x-scroll pb-10 hide-scroll-bar mt-10 mx-auto">
          <div class="flex flex-nowrap gap-10">
            {products.map((product) => (
              <div key={product.id} className=" rounded-lg w-[20rem] shadow-md overflow-hidden relative  ">
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

                <div className=" flex justify-between bg-gray-100 p-4">
                  <div className="mt-4 p-2"> 
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          </div>


        </div>
      </div>
    )
  }