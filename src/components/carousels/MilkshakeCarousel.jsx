import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const MilkshakeCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Milkshake");
  return <CarouselBase items={items} title="Milkshakes" />;
};

export default MilkshakeCarousel;
