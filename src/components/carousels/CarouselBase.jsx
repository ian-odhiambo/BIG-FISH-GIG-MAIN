import { useState, useEffect } from "react";

const CarouselBase = ({ items = [], title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || items.length === 0) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
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
  }, [items]);

  if (!items || items.length === 0) return null;

  const current = items[currentSlide];

  return (
    <div className="flex justify-center w-full mb-4">
      {/* constrained width for clearer image */}
      <div className="relative w-full max-w-4xl">
        <div
  className="h-[400px] bg-cover bg-center transition-all duration-800"
  style={{
    backgroundImage: `url(${current.imageUrl})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
        {/* Overlay Content - Menu Item Info (centered full column) */}
        <div className="container mx-auto h-full px-6">
          <div className="flex h-full">
            {/* Left spacer */}
            <div className="w-1/4"></div>

            {/* Middle - Item Information (full column) */}
            <div className="w-2/4 flex items-center">
              <div className={`text-amber-300 ${isAnimating ? "pop-in" : ""}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                  {current.title}
                </h2>
                <p className="text-lg mb-8 text-gray-200 max-w-xl">
                  {current.description}
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-2xl font-bold">{current.price}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right spacer */}
            <div className="w-1/4 pt-8">
              <div className={`rounded-lg p-6 shadow-lg ${isAnimating ? "pop-in" : ""}`}>
                <h2 className="text-xl font-bold text-amber-400 mb-4">
                  {title}
                </h2>
                <p className="text-sm text-amber-400">
                  Slide {currentSlide + 1} of {items.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-400 text-white p-3 rounded-full hover:bg-amber-500 transition"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-400 text-white p-3 rounded-full hover:bg-amber-500 transition"
        >
          →
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBase;
