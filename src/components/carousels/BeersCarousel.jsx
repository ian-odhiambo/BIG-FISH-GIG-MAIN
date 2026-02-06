import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const BeersCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Beers");
  return <CarouselBase items={items} title="Beers" />;
};

export default BeersCarousel;
