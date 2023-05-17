const { Router } = require("express");
const productRoute = Router();
const {
  getAllProducts,
  getSpotlightProducts,
  getCategoryProducts,
  getDisabledProducts,
  getActiveProducts,
  getOfferProducts,
  createProduct,
  getProductById,
  editProduct,
  disableProduct,
  ableProduct,
  deleteProduct,
  offerProduct,
  unOfferProduct
} = require("../controllers/product.controller");
const { body } = require("express-validator");


productRoute.get("/get-products", getAllProducts);

productRoute.get("/get-spotlight-product", getSpotlightProducts);

productRoute.get("/get-category-product/:category", getCategoryProducts);

productRoute.get("/get-disabled-products", getDisabledProducts);

productRoute.get("/get-active-products", getActiveProducts);

productRoute.get("/get-offer-products", getOfferProducts);

productRoute.post("/create-product", createProduct);

productRoute.get("/get-product-by-id/:id", getProductById);

productRoute.patch("/edit-product/:id", editProduct);

productRoute.patch("/offer-product/:id", offerProduct);

productRoute.patch("/unoffer-product/:id", unOfferProduct);

productRoute.patch("/disable-product/:id", disableProduct);

productRoute.patch("/able-product/:id", ableProduct);

productRoute.delete("/delete-product/:id", deleteProduct);


module.exports = productRoute;
