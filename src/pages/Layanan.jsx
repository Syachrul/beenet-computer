import React from 'react';
import SEO from '@/components/layout/common/SEO';
import DetailServices from '@/features/services/components/DetailServices';

const Layanan = () => {
  return (
    <>
      <SEO
        title="Layanan"
        description="Layanan perbaikan komputer, instalasi jaringan, maintenance IT, dan konsultasi teknologi dari Beenet Computer."
        url="/layanan"
      />
      <DetailServices />
    </>
  );
};

export default Layanan;
