import { SEO_DEFAULT } from '@config/seo';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SEO_DEFAULT.siteName,
  image: `${SEO_DEFAULT.baseUrl}${SEO_DEFAULT.defaultImage}`,
  url: SEO_DEFAULT.baseUrl,
  telephone: '+62-xxx-xxxx-xxxx',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Contoh No. 123',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
};
