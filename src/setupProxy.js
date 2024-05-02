const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://turbo-space-goggles-jjjgwp9759vvcv9r-5000.app.github.dev',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix from the request path
      },
      onProxyReq: (proxyReq, req, res) => {
        // Assuming you have a way to obtain the token (e.g., from localStorage)
        const token = '123456'; // Replace with actual token retrieval logic
        proxyReq.setHeader('Authorization', `Bearer ${token}`);
      },
    })
  );
};
