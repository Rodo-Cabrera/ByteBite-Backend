const config = {

  dbConfig: {
    dbURL: process.env.DB_URL
  },

  portConfig: {
    port: process.env.PORT
  },

  cloudConfig: {
    NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.CLOUD_API_KEY,
    API_SECRET: process.env.CLOUD_API_SECRET,
    CLOUD_URL: process.env.CLOUDINARY_URL
  }

};

module.exports = config