require('dotenv').config();
const express = require('express');
const app = express();
const port =process.env.PORT || 3000; // Choose a port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});