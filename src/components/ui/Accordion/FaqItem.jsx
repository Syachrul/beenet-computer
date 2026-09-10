import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FaqItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-medium text-gray-800">{item.question}</span>
        <span className={`text-2xl font-bold text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? '✕' : '+'}
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 text-gray-600 border-t"
        >
          {item.answer}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FaqItem;
