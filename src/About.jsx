import React from "react";

const About = () => {


    return (
        <section className="flex items-center justify-center flex-col h-screen">
            <h1 className="font-bold text-3xl my-6"> About Hotel Babari Pvt. Ltd.</h1>
            <div className="w-2xl my-4 border-x-1 border-b-1 border-gray-100 p-4 shadow-xl rounded-lg ">
                <p className="text-xl ">Hotel Babari Pvt. Ltd. is a premier hotel located in Sinamaina-2, Rupandehi, Nepal. We are committed to providing our guests with exceptional service and unforgettable experiences during their stay.</p>

                <p className="mt-2 text-xl"> Whether you're traveling for business or leisure, our hotel offers comfortable accommodations, modern amenities, and personalized service to ensure a pleasant stay.</p>

                <hr className="h-1 my-4 " />

                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Contact Us</h2>

                <ul className="space-y-4 mb-4 p-4">
                    <li> <p className="text-lg"><span className="font-semibold">Email :</span> <a href="mailto:info@hotelbabari.com" className="text-blue-400 hover:underline">info@hotelbabari.com</a></p></li>
                    <li><p className="text-lg"><span className="font-semibold">Phone :</span> <a href="tel:+9779857024734" className="text-blue-400 hover:underline">+977 985 702 4734</a></p></li>
                    <li><p className="text-lg"><span className="font-semibold">VAT : </span>60002343 (Nepal)</p></li>
                    <li><p className="text-lg"><span className="font-semibold">Location : </span> Sainamaina-02, Rupandehi</p></li>
                </ul>
            </div>
        </section>
    )
};

export default About;