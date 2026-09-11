import React from 'react';
import SEO from '@/components/layout/common/SEO';
import { localBusinessSchema } from '@/data/schema/localBusiness';
import { Hero, Statistik } from '@/features/home';
import { Services } from '@/features/services';
import { Keunggulan, TargetKlien } from '@/features/about';
import { Testimoni } from '@/features/testimonials';

const Home = () => {
  return (
    <div className="w-full">
      <SEO
        title="Beranda"
        description="Beenet Computer menyediakan layanan perbaikan komputer, instalasi jaringan, dan solusi IT terpercaya untuk bisnis dan personal."
        url="/"
        jsonLd={localBusinessSchema}
      />
      <Hero />
      <Statistik />
      <Services />
      <Keunggulan />
      <TargetKlien />
      <Testimoni />
    </div>
  );
};

export default Home;
