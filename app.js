require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
connectDB();

// Serving static files in express
app.use(express.static('public'));

// Set ejs as the view engine for express
app.set('view engine', 'ejs');

// Express EJS layout
app.use(expressEjsLayouts);
app.set('layout', 'layouts/main');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// Handling 404 Error
app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Note Keeping App running on http://localhost:${PORT}`);
});
