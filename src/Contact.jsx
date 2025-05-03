import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="w-full py-12 px-6 bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Contact Us</h2>
          <p className="text-lg">Email: <a href="mailto:info@hotelbabari.com" className="text-blue-400 hover:underline">info@hotelbabari.com</a></p>
          <p className="text-lg">Phone: <a href="tel:+9779857024734" className="text-blue-400 hover:underline">+977 985 702 4734</a></p>
          <p className="text-lg">VAT: 60002343 (Nepal)</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Location</h2>
          <p className="text-lg">Sainamaina-02, Rupandehi</p>
          <p className="text-lg">Lumbini Province, Nepal</p>
          <iframe
            className="w-full h-64 mt-4 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.456789!2d83.278293!3d27.703456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzEyLjQiTiA4M8KwMTYnNDEuOSJF!5e0!3m2!1sen!2sus!4v1630000000000"
            allowFullScreen=""
            loading="lazy"
            title="Hotel Babari Location"
          ></iframe>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Follow Us</h2>
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-gray-400 my-6" />

      <div className="text-center">
        <p className="text-sm text-gray-600">© 2024 Hotel Babari Pvt. Ltd. All rights reserved.</p>
        <p className="text-sm text-gray-600 mt-1">Designed and developed by Anupam Baral</p>
      </div>
    </footer>
  );
};

export default Contact;