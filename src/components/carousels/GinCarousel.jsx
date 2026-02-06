import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const GinCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Gin");
  return <CarouselBase items={items} title="Gin" />;
};

export default GinCarousel;
