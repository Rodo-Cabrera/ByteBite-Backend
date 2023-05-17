const mongoose = require('mongoose');
const { dbConfig } = require('../config/config');


const dbConnection = async () => {

  try {
    await mongoose.connect(dbConfig.dbURL);
    console.log('Conectado a la DB de ByteBite');
  } catch (error) {
    console.log(error);
  }
};

dbConnection();