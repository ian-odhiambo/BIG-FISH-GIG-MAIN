import React from "react";

const HomeCards = () => {
  return (
    <>
      {/* Cards Section  */}
      {/* Cards Section - Puzzle Layout */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tall Card - Left Column (2 rows tall) */}
          <div className="md:col-span-4 md:row-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/p/AF1QipMgd2ABuHzNuNNhPfRLOZSp3QZpBqzuRaB9aAGh=s680-w680-h510-rw')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">
                  Branch of The Week
                </h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">
                Visit BigFish Kisumu
              </h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                Visit →
              </button>
            </div>
          </div>

          {/* Wide Card - Top Right */}
          <div className="md:col-span-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1636144564353-15a5ed4f618e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaCUyMHBhbnRyeXxlbnwwfHwwfHx8MA%3D%3D')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">BIGFISH PANTRY</h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">
                Dive into fish delights
              </h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                Explore →
              </button>
            </div>
          </div>

          {/* Stacked Card 1 - Top of right column */}
          <div className="md:col-span-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1666181551815-b9adecb24e46?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">
                  Flavourful Marinades
                </h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">
                MARINATE FIVE WAYS
              </h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                Read More →
              </button>
            </div>
          </div>

          {/* Stacked Card 2 - Middle right */}
          <div className="md:col-span-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1742240056878-cb1f27f1771f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaGVybWVufGVufDB8fDB8fHww')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">
                  CATCH OF THE MONTH
                </h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">
                Fresh from Lake Victoria
              </h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                Learn More →
              </button>
            </div>
          </div>

          {/* New Card 1 - 2 rows tall */}
          <div className="md:col-span-4 md:row-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1665332962395-055bc5e562bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FjaHVtYmFyaXxlbnwwfHwwfHx8MA%3D%3D')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">
                  Traditional Recipes
                </h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">
                Luo Heritage Cooking
              </h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                Discover →
              </button>
            </div>
          </div>

          {/* New Card 2 - Stacked (small) */}
          <div className="md:col-span-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://media.istockphoto.com/id/2173819840/photo/tilapia-fish-in-basket.webp?a=1&b=1&s=612x612&w=0&k=20&c=bszvAmRl3YcAfRDiC7GMCLUxT7sDiteYPd9PyoGYTaI=')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">Fresh Delivery</h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">
                Daily Lake Catch
              </h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                Order →
              </button>
            </div>
          </div>

          {/* New Card 3 - Stacked (small) */}
          <div className="md:col-span-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1657313666513-70770d329ef4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D')`,
              }}
            >
              <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">
                  Cocktails and Hot beverages
                </h3>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-amber-700 font-bold text-lg mb-3">Drinks</h4>
              <button className="text-amber-700 font-semibold hover:text-amber-800 transition">
                "toa lock"{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
