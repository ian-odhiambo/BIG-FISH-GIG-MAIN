import FishMenuCarousel from "./carousels/FishMenuCarousel";
import BeveragesCarousel from "./carousels/BeveragesCarousel";
import SoftDrinksCarousel from "./carousels/SoftDrinksCarousel";
import OrganicJuicesCarousel from "./carousels/OrganicJuicesCarousel";
import SmoothieCarousel from "./carousels/SmoothieCarousel";
import MilkshakeCarousel from "./carousels/MilkshakeCarousel";
import IceCreamCarousel from "./carousels/IceCreamCarousel";
import BeersCarousel from "./carousels/BeersCarousel";
import WhiskeyCarousel from "./carousels/WhiskeyCarousel";
import CognacCarousel from "./carousels/CognacCarousel";
import RumCarousel from "./carousels/RumCarousel";
import VodkaCarousel from "./carousels/VodkaCarousel";
import GinCarousel from "./carousels/GinCarousel";
import LiquorCarousel from "./carousels/LiquorCarousel";

const Menu = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-2">Our Menu</h1>
          <p className="text-lg text-amber-100">Explore our delicious varieties of dishes and beverages</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-8 px-6">
        {/* Carousels stacked vertically, constrained width */}
        <div className="w-full max-w-6xl space-y-0">
          {/* Fish Menu */}
          <FishMenuCarousel />

          {/* Beverages & Soft Drinks */}
          <BeveragesCarousel />
          <SoftDrinksCarousel />

          {/* Juices & Smoothies */}
          <OrganicJuicesCarousel />
          <SmoothieCarousel />

          {/* Desserts */}
          <MilkshakeCarousel />
          <IceCreamCarousel />

          {/* Alcoholic Beverages */}
          <BeersCarousel />
          <WhiskeyCarousel />
          <CognacCarousel />
          <RumCarousel />
          <GinCarousel />
          <VodkaCarousel />
          <LiquorCarousel />
        </div>
      </div>
    </div>
  );
};

export default Menu;