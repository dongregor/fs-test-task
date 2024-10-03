const express = require('express');
const cors = require('cors');
const api = require('./routes/api');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json());

app.use('/api', api);

app.get('/*', (req, res) => {
  res.status(404);
  res.json({ error: 'Please provide a valid API route.' });
});

module.exports = app;