
require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/burger", {

            useNewUrlParser: true          })
          console.log('MongoDB connection success');
        }
    catch(err){
        process.exit(1);
    }
}
module.exports = connectDB ;