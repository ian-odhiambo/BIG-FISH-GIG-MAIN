import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-black/70 backdrop-blur-md text-white py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-3">
          <SocialIcons />
        </div>
        
        <p className="text-sm">
          © {new Date().getFullYear()} Big Fish Restaurant
        </p>
      </div>
    </footer>
  );
};

export default Footer;