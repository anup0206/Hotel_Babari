import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import bg from "./assets/bg.jpg";

const Hero = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle button click to navigate to the Book component
  const handleBookNow = () => {
    navigate("/book"); // Navigate to the /book route
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center backdrop-brightness-50">
        <h2 className="text-7xl font-bold mb-4">Welcome to Hotel Babari</h2>
        <p className="text-lg mb-1">Experience luxury and comfort like never before.</p>
        <p className="text-lg md:text-xl lg:text-md">Sainamaina-02, Sorauli</p>
        <p className="text-lg md:text-xl lg:text-md">Rupandehi, Nepal</p>

        <button
          onClick={handleBookNow} // React event handler
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 mt-6" 
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;