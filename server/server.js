const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const express = require("express");
const cors = require('cors');
const orderRoute = require('./routes/orderRoute')
const ingredientsRoute = require('./routes/ingredientsRoute')
const userRoute = require('./routes/userRoutes');
const connectDb = require('./config/db');
const cookieParser = require('cookie-parser');

const app = express();

connectDb();
app.use(cookieParser());
app.use(express.json());
app.use('/api/orders', orderRoute);
app.use('/api/ingredients', ingredientsRoute);
app.use('/api/users',userRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.use(globalErrorHandler);
const PORT = process.env.PORT || 5000 ;

app.listen(PORT, ()=> {
  console.log(`Server Running in port : ${PORT}`)
})

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });