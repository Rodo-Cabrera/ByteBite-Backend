const cloudinary = require('cloudinary').v2;
require("dotenv/config");
const {cloudConfig} = require('../config/config')



cloudinary.config({
  cloud_name: cloudConfig.NAME,
  api_key: cloudConfig.API_KEY,
  api_secret: cloudConfig.API_SECRET
})

export const deleteImage = async (id) => {
 return await cloudinary.uploader.destroy(id)
}