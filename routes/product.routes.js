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
  unOfferProduct,
  spotlightProduct,
  unSpotlightProduct,
  getProductByTittle,
  uploadIco,
  uploadImage
} = require("../controllers/product.controller");
const multer = require('multer')
const upload = multer({dest: "uploads/"})
const { body } = require("express-validator");


productRoute.get("/get-products", getAllProducts);

productRoute.get("/get-spotlight-products", getSpotlightProducts);

productRoute.get("/get-category-product/:category", getCategoryProducts);

productRoute.get("/get-disabled-products", getDisabledProducts);

productRoute.get("/get-active-products", getActiveProducts);

productRoute.get("/get-offer-products", getOfferProducts);

productRoute.post("/create-product", createProduct);

productRoute.get("/get-product-by-id/:id", getProductById);

productRoute.get("/get-product-by-tittle/:tittle", getProductByTittle);

productRoute.patch("/edit-product/:id", editProduct);

productRoute.patch("/spotlight-product/:id", spotlightProduct);

productRoute.patch("/unspotlight-product/:id", unSpotlightProduct);

productRoute.patch("/offer-product/:id", offerProduct);

productRoute.patch("/unoffer-product/:id", unOfferProduct);

productRoute.patch("/disable-product/:id", disableProduct);

productRoute.patch("/able-product/:id", ableProduct);

productRoute.delete("/delete-product/:id", deleteProduct);

productRoute.post("/upload-icon", upload.single("icon"), uploadIco);

productRoute.post("/upload-img", upload.array("img"), uploadImage);


module.exports = productRoute;
