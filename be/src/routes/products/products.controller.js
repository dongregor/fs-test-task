const { 
  getAllProducts
} = require('../../models/products/products.model');


async function httpGetAllProducts(req, res) {
  const products = await getAllProducts();
  return res.status(200).json(products);
}

module.exports = {
  httpGetAllProducts,
};