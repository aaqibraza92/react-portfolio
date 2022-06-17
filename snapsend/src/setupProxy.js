const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://snapsend.pixbrand.co',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v0.1',
    createProxyMiddleware({
      target: 'https://countriesnow.space',
      changeOrigin: true,
    })
  );
};