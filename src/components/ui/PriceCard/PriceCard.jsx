import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const PriceCard = ({ price, priceDetail, features, rating, totalReviews }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {priceDetail || 'Mulai dari'}
          </h4>
          <p className="text-3xl font-bold text-gray-800">{price}</p>
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-semibold">{rating || 4.8}</span>
          <span className="text-xs text-gray-400">({totalReviews || 0})</span>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {features && features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Pesan Sekarang
      </button>
    </div>
  );
};

export default PriceCard;
