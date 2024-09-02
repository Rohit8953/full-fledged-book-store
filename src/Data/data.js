import { GiBookAura } from "react-icons/gi"
import twitter from "./assets/twitter.png"
import instagram from "./assets/instagram.png"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import Placeorder from "../Pages/PlaceOrder/Placeorder"
import Payment from "../Pages/Payments/Payment"
import Delivery from "../Pages/ProductDelivery/Delivery"
import CustomerInfo from "../Pages/Customer/CustomerInfo"

export const paymentDetaildata=[
  {
    id: 1,
    image: "https://example.com/image1.jpg",
    name: "John Doe",
    bookName: "The Great Gatsby",
    date: "2024-09-01",
    paymentStatus: "Paid",
    color:'#00eb7a'
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    name: "Jane Smith",
    bookName: "To Kill a Mockingbird",
    date: "2024-09-02",
    paymentStatus: "Pending",
    color:'#ffba01'
  },
  {
    id: 3,
    image: "https://example.com/image3.jpg",
    userName: "alice_johnson",
    name: "Alice Johnson",
    bookName: "1984",
    date: "2024-09-03",
    paymentStatus: "Cancelled",
    color:'#eb0000'
  },
  {
    id: 4,
    image: "https://example.com/image4.jpg",
    userName: "bob_brown",
    name: "Bob Brown",
    bookName: "Moby Dick",
    date: "2024-09-04",
    paymentStatus: "Paid",
    color:'#00eb7a'
  },
  {
    id: 5,
    image: "https://example.com/image5.jpg",
    userName: "carol_white",
    name: "Carol White",
    bookName: "Pride and Prejudice",
    date: "2024-09-05",
    paymentStatus: "Cancelled",
    color:'#eb0000'
  },
  {
    id: 6,
    image: "https://example.com/image6.jpg",
    userName: "david_wilson",
    name: "David Wilson",
    bookName: "War and Peace",
    date: "2024-09-06",
    paymentStatus: "Paid",
    color:'#00eb7a'
  },
  {
    id: 7,
    image: "https://example.com/image7.jpg",
    userName: "eve_davis",
    name: "Eve Davis",
    bookName: "The Catcher in the Rye",
    date: "2024-09-07",
    paymentStatus: "Pending",
    color:'#ffba01'
  },
  {
    id: 8,
    image: "https://example.com/image8.jpg",
    userName: "frank_miller",
    name: "Frank Miller",
    bookName: "The Hobbit",
    date: "2024-09-08",
    paymentStatus: "Cancelled",
    color:'#eb0000'
  },
  {
    id: 9,
    image: "https://example.com/image9.jpg",
    userName: "grace_lee",
    name: "Grace Lee",
    bookName: "Jane Eyre",
    date: "2024-09-09",
    paymentStatus: "Pending",
    color:'#ffba01'
  },
  {
    id: 10,
    image: "https://example.com/image10.jpg",
    userName: "henry_martin",
    name: "Henry Martin",
    bookName: "The Odyssey",
    date: "2024-09-10",
    paymentStatus: "Paid",
    color:'#00eb7a'
  },
  {
    id: 11,
    image: "https://example.com/image11.jpg",
    userName: "ivy_king",
    name: "Ivy King",
    bookName: "The Iliad",
    date: "2024-09-11",
    paymentStatus: "Cancelled",
    color:'#eb0000'
  },
  {
    id: 12,
    image: "https://example.com/image12.jpg",
    userName: "jack_carter",
    name: "Jack Carter",
    bookName: "Brave New World",
    date: "2024-09-12",
    paymentStatus: "Paid",
    color:'#00eb7a'
  }
];

export const Componentsdata = [
  { 
    id:1,
    name: "Customer Info",
    Component:<CustomerInfo/>,
  },
  {
    id:2,
    name: "Shipping Info",
    Component: <Placeorder/>,
  },
  {
    id:3,
    name: "Payment",
    Component:<Payment/>,
  },
  {
    id:4,
    name: "Delivery Info",
    Component:<Delivery/>,
  },
];

export const data=[
  {
      id:'1',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'History'
  },{
      id:'2',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Dystopian'
  },{
      id:'3',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Programming'
  },{
      id:'4',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Business'
  },{
      id:'5',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Fiction'
  },{
      id:'6',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Biography'
  },{
      id:'6',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Biography'
  },{
      id:'6',
      image:"https://www.shutterstock.com/image-vector/space-stunning-font-futuristic-logo-260nw-1933324259.jpg",
      category:'Biography'
  },
]

export const productsdata = [
  {
    id:'1',
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    category: "Fiction",
    description: "A classic novel set in the Roaring Twenties, telling the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'3',
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 25.50,
    category: "Programming",
    description: "A deep dive into the best features of JavaScript, covering syntax, objects, functions, inheritance, and more.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "Out of Stock",
    productcount:1,
  },
  {
    id:'4',
    title: "Becoming",
    author: "Michelle Obama",
    price: 18.99,
    category: "Biography",
    description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States, Michelle Obama.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'5',
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 16.99,
    category: "Business",
    description: "A guide to starting and managing successful startups with a focus on rapid prototyping and customer feedback.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'6',
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    category: "Fiction",
    description: "A novel about the serious issues of race and rape, told through the eyes of young Scout Finch in the 1930s South.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'7',
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 29.99,
    category: "Programming",
    description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'8',
    title: "1984",
    author: "George Orwell",
    price: 14.99,
    category: "Dystopian",
    description: "A chilling novel that portrays a totalitarian society under constant surveillance and control.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'9',
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 22.99,
    category: "History",
    description: "An exploration of the history of the human species, from the Stone Age to the modern age.",
    image: "https://timpeake.com/wp-content/uploads/2023/04/Tim-Peake-Space-Human-Story-Book-Cover-1@2x.png",
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'10',
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 9.99,
    category: "History",
    description: "A classic novel about the manners and matrimonial machinations of British society in the early 19th century.",
    image: "https://i0.wp.com/s3-bucket-golpapa-offload-media-mumbai.s3.ap-south-1.amazonaws.com/wp-content/uploads/20211101045833/3D-Children_Stories_From_Mummy-s_Fantasy_Land-by-Obenro_Mozhui-English-Short-Story-Hardcover-1.png?fit=800%2C800&ssl=1",
    availability: "Out of Stock",
    productcount:1,
  },
  {
    id:'11',
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 11.99,
    category: "Fiction",
    description: "A story about teenage alienation and angst, narrated by the iconic protagonist Holden Caulfield.",
    image: "https://timpeake.com/wp-content/uploads/2023/04/Tim-Peake-Space-Human-Story-Book-Cover-1@2x.png",    
    availability: "In Stock",
    productcount:1,
  },
  {
    id:'12',
    title: "Atomic Habits",
    author: "James Clear",
    price: 17.01,
    category: "History",
    description: "A guide to building good habits and breaking bad ones with practical strategies.",
    image: "https://timpeake.com/wp-content/uploads/2023/04/Tim-Peake-Space-Human-Story-Book-Cover-1@2x.png",
    availability: "In Stock",
    productcount:1,
  }
];

export const newUpcommingBook = [
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          price: 10.99,
          category: "Fiction",
          description: "A classic novel set in the Roaring Twenties, telling the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1602000489594-9K5870VIH1PIR1DI3XZL/image-asset.jpeg",

          availability: "In Stock"
        },
        {
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          price: 25.50,
          category: "Programming",
          description: "A deep dive into the best features of JavaScript, covering syntax, objects, functions, inheritance, and more.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1601976539615-UA8ZWSQBDLR9ZAC2ZHY1/Marte-Trilogy-3-spines-B-Mockup.jpg",
        
          availability: "Out of Stock"
        },
        {
          title: "Becoming",
          author: "Michelle Obama",
          price: 18.99,
          category: "Biography",
          description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States, Michelle Obama.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1602000489594-9K5870VIH1PIR1DI3XZL/image-asset.jpeg",
          
          availability: "In Stock"
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          price: 16.99,
          category: "Business",
          description: "A guide to starting and managing successful startups with a focus on rapid prototyping and customer feedback.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1602000489594-9K5870VIH1PIR1DI3XZL/image-asset.jpeg",

          availability: "In Stock"
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          price: 12.99,
          category: "Fiction",
          description: "A novel about the serious issues of race and rape, told through the eyes of young Scout Finch in the 1930s South.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1601976539615-UA8ZWSQBDLR9ZAC2ZHY1/Marte-Trilogy-3-spines-B-Mockup.jpg",
    
          availability: "In Stock"
        },
        {
          title: "Clean Code",
          author: "Robert C. Martin",
          price: 29.99,
          category: "Programming",
          description: "A handbook of agile software craftsmanship, focusing on writing clean, readable, and maintainable code.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1602000489594-9K5870VIH1PIR1DI3XZL/image-asset.jpeg",
      
          availability: "In Stock"
        },
        {
          title: "Sapiens: A Brief History of Humankind",
          author: "Yuval Noah Harari",
          price: 22.99,
          category: "History",
          description: "An exploration of the history of the human species, from the Stone Age to the modern age.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1601976539615-UA8ZWSQBDLR9ZAC2ZHY1/Marte-Trilogy-3-spines-B-Mockup.jpg",
      
          availability: "In Stock"
        },
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          price: 9.99,
          category: "Romance",
          description: "A classic novel about the manners and matrimonial machinations of British society in the early 19th century.",
          image: "https://images.squarespace-cdn.com/content/v1/5ecc6ffe34b76f25d60fb2c3/1602000489594-9K5870VIH1PIR1DI3XZL/image-asset.jpeg",
          availability: "Out of Stock"
        },
       
      ];

export const featuredbook = [
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          price: 10.99,
          category: "Fiction",
          topic:"Lorem ipsum dolor sit.",
          description: "A classic novel set in the Roaring Twenties, telling the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
          image: "https://m.media-amazon.com/images/I/61T4DIm0c5L._AC_UF1000,1000_QL80_.jpg",
          availability: "In Stock",
          productcount:1,
        },
        {
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          price: 25.50,
          category: "Programming",
          topic:"Lorem ipsum dolor sit.",
          description: "A deep dive into the best features of JavaScript, covering syntax, objects, functions, inheritance, and more.",
          image: "https://m.media-amazon.com/images/I/61T4DIm0c5L._AC_UF1000,1000_QL80_.jpg",
          url: "https://example.com/products/js-good-parts",
          availability: "Out of Stock",
          productcount:1,
        },
        {
          title: "Becoming",
          author: "Michelle Obama",
          price: 18.99,
          category: "Biography",
          topic:"Lorem ipsum dolor sit.",
          description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States, Michelle Obama.",
          image: "https://m.media-amazon.com/images/I/61T4DIm0c5L._AC_UF1000,1000_QL80_.jpg",
          url: "https://example.com/products/becoming",
          availability: "In Stock",
          productcount:1,
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          price: 16.99,
          category: "Business",
          topic:"Lorem ipsum dolor sit.",
          description: "A guide to starting and managing successful startups with a focus on rapid prototyping and customer feedback.",
          image: "https://m.media-amazon.com/images/I/61T4DIm0c5L._AC_UF1000,1000_QL80_.jpg",
          availability: "In Stock",
          productcount:1,
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          price: 16.99,
          category: "Business",
          topic:"Lorem ipsum dolor sit.",
          description: "A guide to starting and managing successful startups with a focus on rapid prototyping and customer feedback.",
          image: "https://m.media-amazon.com/images/I/61T4DIm0c5L._AC_UF1000,1000_QL80_.jpg",
          availability: "In Stock",
          productcount:1,
        },
      ]

export const data3=[
        {
          urls:"https://linkedin.com/in/rohit-kumar-chaurasia-220742243",
          icons: linkedin,
          name:"Linkedin"
        },{
          urls:"https://github.com/Rohit8953",
          icons: github,
          name:"Github"
        },{
          urls:"https://x.com/Rohitch82888068",
          icons: twitter,
          name:"Twitter"
        },{
          urls:"https://www.instagram.com/rohitchaurasia2452/",
          icons: instagram,
          name:"Instagram"
        }
      ]
 
export const faqsdata=[
  { 
    id:1,
    question:"consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus."
  },{ 
    id:2,
    question:"Lconsectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie??",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus."
  },{ 
    id:3,
    question:"consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie??",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus."
  },{ 
    id:4,
    question:"consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus."
  },{ 
    id:5,
    question:"consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus."
  }
]

export const costomerReveiw = [
  {
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },{
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },{
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },{
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },{
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },{
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },{
    username: "john_doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus",
    image: "https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp",
  },
];


export const userData = [
  { id: 1, username: 'user1', email: 'user1@example.com', time: '08:00 AM', date: '2024-08-30', role: 'admin' },
  { id: 2, username: 'user2', email: 'user2@example.com', time: '09:00 AM', date: '2024-08-30', role: 'seller' },
  { id: 3, username: 'user3', email: 'user3@example.com', time: '10:00 AM', date: '2024-08-30', role: 'customer' },
  { id: 4, username: 'user4', email: 'user4@example.com', time: '11:00 AM', date: '2024-08-30', role: 'admin' },
  { id: 5, username: 'user5', email: 'user5@example.com', time: '12:00 PM', date: '2024-08-30', role: 'seller' },
  { id: 6, username: 'user6', email: 'user6@example.com', time: '01:00 PM', date: '2024-08-30', role: 'customer' },
  { id: 7, username: 'user7', email: 'user7@example.com', time: '02:00 PM', date: '2024-08-30', role: 'admin' },
  { id: 8, username: 'user8', email: 'user8@example.com', time: '03:00 PM', date: '2024-08-30', role: 'seller' },
  { id: 9, username: 'user9', email: 'user9@example.com', time: '04:00 PM', date: '2024-08-30', role: 'customer' },
  { id: 10, username: 'user10', email: 'user10@example.com', time: '05:00 PM', date: '2024-08-30', role: 'admin' },
  { id: 11, username: 'user11', email: 'user11@example.com', time: '06:00 PM', date: '2024-08-30', role: 'seller' },
  { id: 12, username: 'user12', email: 'user12@example.com', time: '07:00 PM', date: '2024-08-30', role: 'customer' },
  { id: 13, username: 'user13', email: 'user13@example.com', time: '08:00 PM', date: '2024-08-30', role: 'admin' },
  { id: 14, username: 'user14', email: 'user14@example.com', time: '09:00 PM', date: '2024-08-30', role: 'seller' },
  { id: 15, username: 'user15', email: 'user15@example.com', time: '10:00 PM', date: '2024-08-30', role: 'customer' },
  { id: 16, username: 'user16', email: 'user16@example.com', time: '11:00 PM', date: '2024-08-30', role: 'admin' },
  { id: 17, username: 'user17', email: 'user17@example.com', time: '12:00 AM', date: '2024-08-31', role: 'seller' },
  { id: 18, username: 'user18', email: 'user18@example.com', time: '01:00 AM', date: '2024-08-31', role: 'customer' },
  { id: 19, username: 'user19', email: 'user19@example.com', time: '02:00 AM', date: '2024-08-31', role: 'admin' },
  { id: 20, username: 'user20', email: 'user20@example.com', time: '03:00 AM', date: '2024-08-31', role: 'seller' }
];
