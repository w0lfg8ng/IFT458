// app.js
// Student Name: Erick Wendler
// Student ID: 1219739105
// Date: July 13, 2024

// creates a basic Express server, imports and uses middleware, and sets up a route.

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the middleware
app.use(loggerMiddleware);

// Add a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});