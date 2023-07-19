const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set the static directories to serve CSS, JS, and images
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to serve each HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/all-categories', (req, res) => {
  res.sendFile(path.join(__dirname, 'all-categories.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
  });

// Add more routes for other HTML files if needed

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
