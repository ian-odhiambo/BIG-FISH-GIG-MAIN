import "../index.css";
import Hero from "./Hero";
import HomeCards from "./HomeCards";
import Accordion from "./Accordion";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HomeCards />
      <Accordion />
    </div>
  );
};

export default Home;
