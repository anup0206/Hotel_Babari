import React from "react";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img12 from "./assets/12.jpg";
import img13 from "./assets/13.jpg";

const Gallery = () => {
  const images = [
    { src: img1, alt: "Hotel entrance" },
    { src: img2, alt: "Hotel room" },
    { src: img3, alt: "Dining area" },
    { src: img4, alt: "Swimming pool" },
    { src: img5, alt: "Hotel exterior" },
    { src: img6, alt: "Event hall" },
    { src: img7, alt: "Hotel staff" },
    { src: img8, alt: "Garden view" },
    { src: img9, alt: "Food presentation" },
    { src: img10, alt: "Hotel pathway" },
    { src: img12, alt: "Night view" },
    { src: img13, alt: "Reception area" },
  ];

  return (
    <section className="my-8 w-full flex flex-col">
      <h2 className="text-3xl font-bold text-center py-6">Our Gallery</h2>
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;