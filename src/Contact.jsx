import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <footer className="py-12 px-6 bg-gray-300">
            <div className="grid grid-cols-3 mb-4 px-8">
                <div>
                    <h2 className="text-lg text-gray-800 font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">Email : <a href="mailto: mail.hotelbabari@gmail.com" className="text-blue-400 dark:text-sky-500 "> mail.hotelbabari@gmail.com</a></p>

                    <p className="mb-2">Phone : <a href="tel:9857024734" className="text-blue-400 dark:text-sky-500 ">071422080 ,9857024734</a></p>

                    <p className="mb-2">VAT No.: 606002343 </p>

                </div>

                <div>
                    <h2 className="mb-4 text-lg font-bold">Location</h2>
                    <p className="mb-2">Sainamaina-02, sorauli</p>
                    <p className="mb-2">Rupandehi, Lumbini Province</p>
                    <p className="mb-2">Nepal</p>
                </div>

                <div>
                    <h2 className="mb-4 text-lg font-bold"> Follow us </h2>
                    <div className="flex gap-5"> 
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    </div>
                </div>

            </div>

            <hr  className="h-2 ml-5 mr-5"/>

            <div className="text-center mt-2">
                <p className="mb-2">© 2024 Hotel Babari Pvt. Ltd. All rights reserved.
                </p>
                <p>Designed and developed with by the teams of Hotel Babari</p>
            </div>
        </footer>

    )

}
export default Contact;