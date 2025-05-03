import React from "react";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaBed, FaShower, FaCar, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";

const Service = () => {
    const services = [
        {
            icon: <TbToolsKitchen2 size={40} />,
            name: "Room Services",
            text: "Enjoy delicious meals delivered to your room, available 24/7.",
        },
        {
            icon: <FaBed size={40} />,
            name: "Accommodation",
            text: "Relax in our comfortable and spacious rooms, perfect for a restful stay.",
        },
        {
            icon: <FaShower size={40} />,
            name: "Bathroom Amenities",
            text: "Pamper yourself with our premium bathroom amenities and toiletries.",
        },
        {
            icon: <FaCar size={40} />,
            name: "Valet Parking",
            text: "Leave the hassle of parking to us with our convenient valet parking service.",
        },
        {
            icon: <FaWifi size={40} />,
            name: "High-Speed Internet",
            text: "Stay connected with our complimentary high-speed Wi-Fi access.",
        },
        {
            icon: <FaSwimmingPool size={40} />,
            name: "Swimming Pool",
            text: "Take a refreshing dip in our sparkling swimming pool, perfect for relaxation.",
        },
        {
            icon: <PiTelevisionSimpleDuotone size={40} />,
            name: "Entertainment",
            text: "Enjoy a wide range of channels and entertainment options on our in-room TVs.",
        },
    ];

    return (
        <section className="py-8 h-screen">
            <h3 className="text-3xl font-bold text-center py-10">Our Services</h3>
            <hr className="h-1 bg-gray-300 my-4 " />
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-80 p-8 rounded-xl border border-gray-300 shadow-md hover:shadow-lg bg-white hover:bg-gray-50 text-center "
                    >
                        <div className="text-blue-500 mb-4 top-0 left-0">{service.icon}</div>
                        <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                        <p className="text-gray-600">{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;