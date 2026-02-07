import  { useState, useEffect } from "react";
import data from "../dishes.json";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const dishes = data.dishes;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % dishes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + dishes.length) % dishes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentDish = dishes[currentSlide];

  return (
    <>
      {/* Navbar */}
     

      {/* Hero Section with Carousel of changing image background */}
      <div className="relative w-full">
        {/* Carousel Background - Full Width */}
        <div
          className="h-[600px] bg-cover bg-center transition-all duration-800"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${currentDish.image})`,
          }}
        >
          {/* Overlay Content - Menu & Dish Info */}
          <div className="container mx-auto h-full px-6">
            <div className="flex h-full">
              {/* Left Side - Empty for spacing */}
              <div className="w-1/4"></div>

              {/* Middle - Dish Information */}
              <div className="w-2/4 flex items-center">
                <div className={`text-white ${isAnimating ? "pop-in" : ""}`}>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                    {currentDish.name}
                  </h2>
                  <p className="text-lg mb-8 text-gray-200 max-w-xl">
                    {currentDish.description}
                  </p>
                  <div className="flex gap-8">
                    {currentDish.prices.map((price, index) => (
                      <div key={index}>
                        <p className="text-2xl font-bold">{price.amount}</p>
                        <p className="text-gray-300">{price.size}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Menu Section */}
              <div className="w-1/4 pt-8">
                <div
                  className={`  rounded-lg p-6 shadow-lg ${isAnimating ? "pop-in" : ""}`}
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    MENUS
                  </h2>
                  <ul className="space-y-2 mb-6 ">
                    {[
                      "MENU",
                      "BEVERAGES",
                      "PATNERSHIPS",
                      "OUTSIDE CATERING",
                      "JAVA FOUNDATION",
                      "CONTACT US",
                      "BLOGS",
                    ].map((item) => (
                      <li
                        key={item}
                        className="py-1 hover:text-red-700 cursor-pointer text-amber-400 font-bold"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-bold text-gray-800 mb-3">Order Now!</p>
                    <div className="space-y-2">
                      <button className="w-full bg-black text-white py-2 px-3 rounded text-sm hover:bg-amber-800 transition">
                        Uber Eats
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400  text-white p-3 rounded-full"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400   text-white p-3 rounded-full"
          >
            →
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition ${index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
