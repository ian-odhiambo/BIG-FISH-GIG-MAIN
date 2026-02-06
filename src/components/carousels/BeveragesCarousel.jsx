import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const BeveragesCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Beverages");
  return <CarouselBase items={items} title="Beverages" />;
};

export default BeveragesCarousel;
