const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  const socketProxy= createProxyMiddleware('/socket', {
    target: 'http://localhost:3005',
    changeOrigin: true,
    ws: true, 
    logLevel: 'debug',
  });

  app.use(socketProxy);
}; 