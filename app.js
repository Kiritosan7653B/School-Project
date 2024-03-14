const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define route to render index.ejs
app.get('/', (req, res) => {
  res.render('start'); // Renders views/index.ejs
});
app.get('/index', (req, res) => {
  res.render('index'); // Renders views/index.ejs
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
