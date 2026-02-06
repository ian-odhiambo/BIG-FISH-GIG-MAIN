import React, { useState } from "react";
import data from "../dishes.json";

const Accordion = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const faqItems = data.faqItems;
  const menuCategories = data.menuCategories;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      {/* ACCORDION SECTIONS ADDED HERE */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">
          Menu Categories
        </h2>
        <div className="space-y-4">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleMenu(index)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-semibold flex justify-between"
              >
                <span>{category.title}</span>
                <span>{activeMenu === index ? "−" : "+"}</span>
              </button>
              {activeMenu === index && (
                <div className="p-6 bg-white border-t">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="py-2 px-4 bg-amber-50 rounded"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 font-semibold flex justify-between"
              >
                <span>{item.question}</span>
                <span>{activeFaq === index ? "−" : "+"}</span>
              </button>
              {activeFaq === index && (
                <div className="p-6 bg-white border-t">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
