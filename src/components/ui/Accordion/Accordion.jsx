import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
          >
            <span className="font-medium text-gray-800">{item.question}</span>
            {activeIndex === index ? (
              <FaChevronUp className="text-blue-600 flex-shrink-0 ml-4" />
            ) : (
              <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
            )}
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-600 border-t">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
