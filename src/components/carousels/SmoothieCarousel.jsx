import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const SmoothieCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Smoothie");
  return <CarouselBase items={items} title="Smoothies" />;
};

export default SmoothieCarousel;
