const Product = require('../models/product.model');

const getAllProductsService = async () => {
  return await Product.find({})
};

const getSpotlightProductsService = async () => {
  return await Product.find({spotlight: true});
};

const getActiveProductsService = async () => {
  return await Product.find({ disabled: false });
};

const getOfferProductsService = async () => {
  return await Product.find({ offer: true });
};

const getCategoryProductsService = async (category) => {
  return await Product.find({ category: category });
};

const getProductByTittleService = async (tittle) => {
  return await Product.find({ tittle: tittle });
};

const getProductByIdService = async (id) => {
  return await Product.findById(id);
};

const createProductService = async (prodData) => {
  const newProduct = new Product(prodData);
  return await newProduct.save();
};

const editProductService = async (id, prodData) => {
  return await Product.findByIdAndUpdate(id, prodData);
};

const deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id)
}

module.exports = {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  editProductService,
  deleteProductService,
  getActiveProductsService,
  getSpotlightProductsService,
  getOfferProductsService,
  getCategoryProductsService,
  getProductByTittleService,
};