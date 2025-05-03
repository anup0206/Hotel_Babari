import React from "react";

const About = () => {

    return (
        <section>
            <h1> About Hotel Babari Pvt. Ltd.</h1>

            <p>Hotel Babari Pvt. Ltd. is a premier hotel located in Sinamaina-2, Rupandehi, Nepal. We are committed to providing our guests with exceptional service and unforgettable experiences during their stay.</p>

            <p> Whether you're traveling for business or leisure, our hotel offers comfortable accommodations, modern amenities, and personalized service to ensure a pleasant stay.</p>

            <hr  className="h-1"/>

            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Contact Us</h2>
            <ul>
                <li> <p className="text-lg"><span>Email:</span> <a href="mailto:info@hotelbabari.com" className="text-blue-400 hover:underline">info@hotelbabari.com</a></p></li>

                <li><p className="text-lg"><span>Phone:</span> <a href="tel:+9779857024734" className="text-blue-400 hover:underline">+977 985 702 4734</a></p></li>
                <li><p className="text-lg"><span>VAT: </span>60002343 (Nepal)</p></li>
                <li>
                <p className="text-lg"><span>Location : </span> Sainamaina-02, Rupandehi</p></li>
            </ul>
        </section>
    )
};

export default About;