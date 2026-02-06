import CarouselBase from "./CarouselBase";
import data from "../../dishes.json";

const OrganicJuicesCarousel = () => {
  const items = (data.menuItems || []).filter((i) => i.category === "Organic Juices");
  return <CarouselBase items={items} title="Organic Juices" />;
};

export default OrganicJuicesCarousel;
