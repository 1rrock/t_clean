import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.trustmygroup.co.kr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/.next/', '/api/'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap-service.xml`,
      `${baseUrl}/sitemap-pages.xml`,
      `${baseUrl}/sitemap.xml`,
    ],
  };
}

