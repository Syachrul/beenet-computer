import { Helmet } from 'react-helmet-async';
import { SEO_DEFAULT } from '@config/seo';

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  jsonLd,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SEO_DEFAULT.siteName}`
    : SEO_DEFAULT.defaultTitle;
  const fullDescription = description || SEO_DEFAULT.defaultDescription;
  const fullImage = `${SEO_DEFAULT.baseUrl}${image || SEO_DEFAULT.defaultImage}`;
  const fullUrl = `${SEO_DEFAULT.baseUrl}${url || ''}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SEO_DEFAULT.siteName} />
      <meta property="og:locale" content={SEO_DEFAULT.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content={SEO_DEFAULT.twitterHandle} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
