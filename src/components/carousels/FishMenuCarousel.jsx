import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const FishMenuCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Fish");
  return <CarouselBase items={items} title="Fish Menu" />;
};

export default FishMenuCarousel;
