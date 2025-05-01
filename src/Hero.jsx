<section className="relative h-screen w-full overflow-hidden">
  {/* Blurred background image */}
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
    style={{ backgroundImage: `url(${bg})` }}
  ></div>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Foreground content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
    <h2 className="text-5xl font-bold mb-4">Welcome to Hotel Babari</h2>
    <p className="text-lg mb-1">Experience luxury and comfort like never before.</p>
    <p className="text-md mb-6">Sainamaina-02, Sorauli<br />Rupandehi, Nepal</p>
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
      Book Now
    </button>
  </div>
</section>
