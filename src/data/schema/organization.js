import { SEO_DEFAULT } from '@config/seo';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO_DEFAULT.siteName,
  url: SEO_DEFAULT.baseUrl,
  logo: `${SEO_DEFAULT.baseUrl}${SEO_DEFAULT.defaultImage}`,
  sameAs: [
    'https://facebook.com/beenetcomputer',
    'https://instagram.com/beenetcomputer',
  ],
};
