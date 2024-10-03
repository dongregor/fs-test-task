const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { populateProducts } = require('./models/products/products.model');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await populateProducts();
  
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  });
}

startServer();