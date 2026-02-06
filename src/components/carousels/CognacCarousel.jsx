import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const CognacCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Cognac");
  return <CarouselBase items={items} title="Cognac" />;
};

export default CognacCarousel;

