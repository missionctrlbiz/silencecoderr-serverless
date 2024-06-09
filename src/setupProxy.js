// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Proxy requests starting with '/api'
    createProxyMiddleware({
      target: 'https://silencecoderr-serverless.vercel.app', // Your Vercel app URL (without trailing slash)
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/fetch-data', // Rewrite '/api' to '/api/fetch-data'
      },
    })
  );
};