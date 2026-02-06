import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const IceCreamCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Ice Cream");
  return <CarouselBase items={items} title="Ice Cream" />;
};

export default IceCreamCarousel;
