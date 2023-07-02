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
  uploadImage,
  prodOfferPrice,
  editProdPrice
} = require("../controllers/product.controller");
const {jwtValidator, jwtValidatorAdmin, jwtValidatorOwner, jwtValidatorUser} = require("../middlewares/jwtValidator")
const multer = require('multer')
const upload = multer({dest: "uploads/"})


productRoute.get("/get-products", jwtValidatorAdmin, getAllProducts);

productRoute.get("/get-spotlight-products", jwtValidator, getSpotlightProducts);

productRoute.get("/get-category-product/:category", jwtValidator, getCategoryProducts);

productRoute.get("/get-disabled-products", jwtValidatorAdmin, getDisabledProducts);

productRoute.get("/get-active-products", jwtValidator, getActiveProducts);

productRoute.get("/get-offer-products", jwtValidator, getOfferProducts);

productRoute.post("/create-product", jwtValidatorAdmin, createProduct);

productRoute.get("/get-product-by-id/:id", jwtValidator, getProductById);

productRoute.get("/get-product-by-tittle/:tittle", jwtValidator, getProductByTittle);

productRoute.patch("/edit-product/:id", jwtValidatorAdmin, editProduct);

productRoute.patch("/spotlight-product/:id", jwtValidatorAdmin, spotlightProduct);

productRoute.patch("/unspotlight-product/:id", jwtValidatorAdmin, unSpotlightProduct);

productRoute.patch("/offer-product/:id", jwtValidatorAdmin, offerProduct);

productRoute.patch("/unoffer-product/:id", jwtValidatorAdmin, unOfferProduct);

productRoute.patch("/disable-product/:id", jwtValidatorAdmin, disableProduct);

productRoute.patch("/able-product/:id", jwtValidatorAdmin, ableProduct);

productRoute.patch("/set-offer-price/:id", jwtValidatorAdmin, prodOfferPrice);

productRoute.patch("/edit-price/:id", jwtValidatorAdmin, editProdPrice);

productRoute.delete("/delete-product/:id", jwtValidatorOwner, deleteProduct);

productRoute.post("/upload-icon", upload.single("icon"), jwtValidatorAdmin, uploadIco);

productRoute.post("/upload-img", upload.array("img"), jwtValidatorAdmin, uploadImage);


module.exports = productRoute;
