import aboutData from "../aboutData.json";
import mainCardsData from "../mainCards.json";
import serviceCardsData from "../serviceCards.json"
import { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Calendar, Users, ChefHat, Truck } from 'lucide-react';

const About = () => {
  const [mainCards, setMainCards] = useState([]);
  const [serviceCards, setServiceCards] = useState([]);
  const [aboutContent, setAboutContent] = useState({});

  // Map icon types to React components
  const iconComponents = {
    calendar: <Calendar className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    chef: <ChefHat className="w-6 h-6" />,
    truck: <Truck className="w-6 h-6" />,
  };

  useEffect(() => {
    // Load data from JSON files
    setAboutContent(aboutData);
    setMainCards(mainCardsData);
    
    // Process service cards to include React icons
    const processedServiceCards = serviceCardsData.map(card => {
      if (card.iconType === 'emoji') {
        return {
          ...card,
          icon: card.iconEmoji
        };
      }
      return {
        ...card,
        icon: iconComponents[card.iconType]
      };
    });
    
    setServiceCards(processedServiceCards);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${aboutContent.hero?.backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              <span className='text-red-400'>The</span> <span className='text-blue-300'>Big Fish</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {aboutContent.hero?.subtitle}
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              {aboutContent.hero?.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {aboutContent.header?.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {aboutContent.header?.description}
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {mainCards.map((card, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Catering Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl text-blue-600">
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{aboutContent.contact?.title}</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {aboutContent.contact?.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${aboutContent.contact?.email}`}
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            >
              {aboutContent.contact?.email}
            </a>
            <div className="text-lg">
              <p>{aboutContent.contact?.phone1}</p>
              <p>{aboutContent.contact?.phone2}</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="hover:opacity-80 transition duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About