import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const VodkaCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Vodka");
  return <CarouselBase items={items} title="Vodka" />;
};

export default VodkaCarousel;
