import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const WhiskeyCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Whiskey");
  return <CarouselBase items={items} title="Whiskey" />;
};

export default WhiskeyCarousel;
