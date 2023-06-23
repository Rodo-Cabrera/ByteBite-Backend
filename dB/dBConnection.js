const { dbConfig } = require('../config/config');
const mongoose = require('mongoose');


const dbConnection = async () => {

  try {
    await mongoose.connect(dbConfig.dbURL);
    console.log('Conectado a la DB de ByteBite');
  } catch (error) {
    console.log(error);
  }
};

dbConnection();