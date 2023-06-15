const {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  editProductService,
  deleteProductService,
  getActiveProductsService,
  getSpotlightProductsService,
  getOfferProductsService,
  getCategoryProductsService,
  getProductByTittleService
} = require("../services/product.service");
const cloudinary = require("cloudinary").v2;

const fs = require('fs-extra')


const getAllProducts = async (req, res) => {
  try {
    const resp = await getAllProductsService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSpotlightProducts = async (req, res) => {
  try {
    const resp = await getSpotlightProductsService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getOfferProducts = async (req, res) => {
  try {
    const resp = await getOfferProductsService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCategoryProducts = async (req, res) => {
  try {
    const {category} = req.params
    const resp = await getCategoryProductsService(category);
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getActiveProducts = async (req, res) => {
  try {
    const resp = await getActiveProductsService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getDisabledProducts = async (req, res) => {
  try {
    const resp = await getActiveUsersService();
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await getProductByIdService(id);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProductByTittle = async (req, res) => {
  try {
    const { tittle } = req.params;
    const resp = await getProductByTittleService(tittle);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createProduct = async (req, res) => {


  try {  
    const prodData = req.body;   
    const resp = await createProductService(prodData);
    res.status(201).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const uploadIco = async (req, res) => {

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "products"
    });
    await fs.remove(req.file.path)
    return res.json(result)
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Error al cargar el ícono"})
  }
}

const uploadImage = async (req, res) => {
  try {
    const promises = req.files.map((file) =>
      cloudinary.uploader.upload(file.path, { folder: "products" })
    );
    const results = await Promise.all(promises);
    await fs.remove(req.files.path);
    return res.json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al cargar imágenes" });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const prodData = req.body;
    const resp = await editProductService(id, prodData);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await deleteProductService(id);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const disableProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const disabledTrue = { disabled: true };
    const resp = await editProductService(id, disabledTrue);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const ableProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const disabledFalse = { disabled: false };
    const resp = await editProductService(id, disabledFalse);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const offerProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const offerTrue = { offer: true };
    const resp = await editProductService(id, offerTrue);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const spotlightProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const spotlightTrue = { spotlight: true };
    const resp = await editProductService(id, spotlightTrue);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const unSpotlightProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const spotlightFalse = { spotlight: false };
    const resp = await editProductService(id, spotlightFalse);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const unOfferProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const unOffer = { offer: false };
    const resp = await editProductService(id, unOffer);
    if (!resp) {
      res.status(404).json("ID de producto inexistente");
      return;
    }
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
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
};
