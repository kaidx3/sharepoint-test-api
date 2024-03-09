// Import the express library
const express = require('express');

// Create an Express application
const app = express();

// Define a route for /sharepointTest
app.get('/sharepointTest', (req, res) => {
  res.status(200).send('Sharepoint test route is working!');
});

// Make the Express app listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});