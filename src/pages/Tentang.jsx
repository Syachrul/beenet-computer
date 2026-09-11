import React from 'react';
import SEO from '@/components/layout/common/SEO';
import { organizationSchema } from '@/data/schema/organization';
import DetailTentang from '@/features/about/components/DetailTentang';

const Tentang = () => {
  return (
    <>
      <SEO
        title="Tentang Kami"
        description="Kenali Beenet Computer lebih dekat — visi, misi, keunggulan, dan target klien kami dalam menyediakan solusi IT terpercaya."
        url="/tentang"
        jsonLd={organizationSchema}
      />
      <DetailTentang />
    </>
  );
};

export default Tentang;
