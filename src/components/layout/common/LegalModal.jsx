import React from 'react';
import Modal from '@/components/ui/Modal';

const LegalModal = ({ isOpen, onClose, content }) => {
  if (!content) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={content.title}>
      <div className="space-y-6">
        {/* Last Updated */}
        <p className="text-sm text-gray-400 italic">
          Terakhir diperbarui: {content.lastUpdated}
        </p>

        {/* Sections */}
        {content.sections.map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-bold text-gray-800">
              {section.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {section.content}
            </p>

            {/* List */}
            {section.list && (
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                {section.list.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            )}

            {/* Contact Info */}
            {section.contact && (
              <div className="bg-blue-50 rounded-lg p-4 mt-2 space-y-1">
                {section.contact.phone && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Telepon:</span> {section.contact.phone}
                  </p>
                )}
                {section.contact.email && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Email:</span> {section.contact.email}
                  </p>
                )}
                {section.contact.address && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Alamat:</span> {section.contact.address}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default LegalModal;
