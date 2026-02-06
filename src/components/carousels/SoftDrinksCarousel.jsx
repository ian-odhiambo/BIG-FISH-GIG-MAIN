import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const SoftDrinksCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Soft Drinks");
  return <CarouselBase items={items} title="Soft Drinks" />;
};

export default SoftDrinksCarousel;
