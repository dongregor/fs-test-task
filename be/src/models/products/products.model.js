const productsDatabase = require('./products.mongo');
const productsData = require('./products.data');

async function populateProducts() {
  try {
    const count = await productsDatabase.countDocuments();
    
    if (count === 0) {
      const result = await productsDatabase.insertMany(productsData);
      console.log(`Populated database with ${result.length} products.`);
    } else {
      console.log("Database already populated with products.");
    }
  } catch (error) {
    console.error("Error inserting products:", error);
  }
}

async function getAllProducts() {
  return await productsDatabase
    .find({}, { '_id': 0, '__v': 0 })
}

module.exports = {
  populateProducts,
  getAllProducts,
};