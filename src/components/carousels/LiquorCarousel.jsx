import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const LiquorCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Liquor");
  return <CarouselBase items={items} title="Liquor" />;
};

export default LiquorCarousel;
