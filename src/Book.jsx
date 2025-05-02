import React from "react";

const Book = () => {
    return (
        <section className=" flex items-center justify-center flex-col h-screen  bg-gray-200 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="font-bold text-3xl mb-6">For Booking Process</h1>

                <p className="text-lg mb-6">To book a room,hotel and to order food, please contact us via email or phone. Our team will assist you with the booking process.</p>

                <h3 className="text-lg text-gray-800 font-semibold mb-2" >Contact Information:</h3>

                <p className="mb-2">Email : <a href="mailto: mail.hotelbabari@gmail.com" className="text-blue-400 dark:text-sky-500 "> mail.hotelbabari@gmail.com</a></p>

                <p className="mb-2">Phone : <a href="tel:9857024734" className="text-blue-400 dark:text-sky-500 ">071422080 ,9857024734</a></p>

                <div className="px-6 py-6">
                    <a href="mailto: mail.hotelbabari@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Mail Now</a>

                    <a href="tel:9857024734"  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-4">Contact Us</a>
                </div>

                <div>
                    <p className="mb-2 text-lg font-bold">Address:</p>
                    <p className="mb-2">Sainamaina-02, sorauli</p>
                    <p className="mb-2">Rupandehi, Lumbini Province</p>
                    <p className="mb-2">Nepal</p>
                </div>
            </div>
        </section>
    )

}
export default Book;