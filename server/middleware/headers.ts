export default defineEventHandler((event) => {
  // Security headers
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "X-Frame-Options", "DENY");
  setHeader(event, "X-XSS-Protection", "1; mode=block");
  setHeader(event, "Referrer-Policy", "strict-origin-when-cross-origin");

  // SEO headers
  setHeader(
    event,
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'",
  );

  // Cache headers for static assets
  if (
    event.node.req.url?.match(
      /\.(jpg|jpeg|png|gif|webp|css|js|svg|woff|woff2)$/i,
    )
  ) {
    setHeader(event, "Cache-Control", "public, max-age=31536000, immutable");
  }

  // Cache headers for HTML
  if (
    event.node.req.url?.endsWith(".html") ||
    !event.node.req.url?.includes(".")
  ) {
    setHeader(event, "Cache-Control", "public, max-age=3600, must-revalidate");
  }
});
