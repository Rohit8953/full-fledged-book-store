import { Link } from "react-router-dom";
import { data3 } from "../../Data/data";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About us</h2>
          <p className="mb-4 text-start">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, blanditiis error corrupti qui enim itaque asperiores at minima id dolore odit perferendis ipsam, magni consequuntur molestias facere porro autem quidem. Quod incidunt sequi nesciunt eveniet cum nulla, culpa omnis eligendi amet repellat architecto autem, doloremque deleniti, ad temporibus facilis in.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg  font-semibold mb-4">
            Quick Links
          </h2>
          <ul>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow us</h2>
          <div className="flex  flex-col">
            {data3.map((data,index) => {
              return <Link key={index} href={data.urls}>{data.name}</Link>;
            })}
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact us</h2>
          <p>Jhansi, Uttar Pradesh, India</p>
          <p>Email: rc3881425@gmail.com</p>
          <p>Phone: +918953014140</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8 select-none">
        © 2024 Designed by Rohit. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
