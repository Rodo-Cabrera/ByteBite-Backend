const express = require('express');
require('dotenv/config');
require('../dB/dBConnection')
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('../routes/user.routes');
const productRoute = require("../routes/product.routes");
const loginRoute = require('../routes/login.routes')
const { portConfig } = require('../config/config')



const app = express();


const port = portConfig.port;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());



app.use('/users', userRoutes);
app.use('/prod', productRoute);
app.use('/login', loginRoute);


app.listen(port, () => {
  console.log(`escuchando puerto ${port}`);
});