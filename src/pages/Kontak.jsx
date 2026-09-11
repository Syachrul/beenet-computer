import React from 'react';
import SEO from '@/components/layout/common/SEO';
import { Kontak } from '@/features/contact';
import Container from '@/components/layout/common/Container';

const KontakPage = () => {
  return (
    <Container>
      <SEO
        title="Kontak"
        description="Hubungi Beenet Computer untuk konsultasi IT, perbaikan komputer, dan layanan jaringan. Kami siap membantu kebutuhan teknologi Anda."
        url="/kontak"
      />
      <Kontak />
    </Container>
  );
};

export default KontakPage;
