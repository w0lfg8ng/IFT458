// loggerMiddleware.js
// Student Name: Erick Wendler
// Student ID: 1219739105
// Date: July 13, 2024

// This middleware logs the timestamp, HTTP method, and URL of each request

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
  module.exports = loggerMiddleware;