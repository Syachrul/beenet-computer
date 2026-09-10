import React from 'react';
import { Hero, Statistik } from '@/features/home';
import { Services } from '@/features/services';
import { Keunggulan, TargetKlien } from '@/features/about';
import { Testimoni } from '@/features/testimonials';

const Home = () => {
  return (
    <div className="w-full">
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
