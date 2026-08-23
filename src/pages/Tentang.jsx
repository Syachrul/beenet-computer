import React from 'react'
import Keunggulan from '../components/sections/Keunggulan'
import TargetKlien from '../components/sections/TargetKlien'

const Tentang = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-8">Tentang BeeNET</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            BeeNET Computer adalah perusahaan IT yang bergerak di bidang jasa service PC, Laptop, Printer, dan Networking.
            Kami berkomitmen memberikan pelayanan terbaik untuk personal, sekolahan, unit usaha, maupun perkantoran.
          </p>
        </div>
      </section>
      <Keunggulan />
      <TargetKlien />
    </>
  )
}

export default Tentang
