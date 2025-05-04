import React from "react";
import logo from "./assets/logo.jpg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const navitems = [
    {
      title:"Home",
      path:"/"
    },
    {
      title:"About",
      path:"/about"
    },
    {
      title:"Services",
      path:"/service"
    },
    {
      title:"Gallery",
      path:"/gallery"
    },
    {
      title:"Book now",
      path:"/book"
    }
  ]
  return (
    <section className="absolute sticky top-0 left-0 w-full z-50 bg-red-600 bg-opacity-50 py-4 mb-0">
    <div className="container mx-auto flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-12 rounded-full mx-10" />
      <ul className="flex space-x-6">
        {navitems.map((item, index) => (
          <li key={index}>
          <Link   className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-white hover:text-green-400 transition duration-300 hover:underline" to={item.path}>
            {item.title}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
  
  );
};

export default Navbar;