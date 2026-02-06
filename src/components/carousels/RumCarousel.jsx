import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const RumCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Rum");
  return <CarouselBase items={items} title="Rum" />;
};

export default RumCarousel;
