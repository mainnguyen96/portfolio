export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://portfolio-chinhnguyen.vercel.app/</loc>
        <lastmod>2023-01-22T00:15:16+01:00</lastmod>
        <priority>1.0</priority>
    </url>
</urlset>
`;
  // Return the response with the content, a status 200 message, and the appropriate headers for an
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8'
    }
  });
};
