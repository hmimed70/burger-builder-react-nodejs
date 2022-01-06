const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');


ordersSchema = new mongoose.Schema({
    ingredients:{
        salad :   {
            type: Number ,
           required: true,
           default: 0
          },
          meat : {
              type: Number ,
              required: true,
              default: 0
          },
          bacon : {
              type: Number ,
              required: true,
              default: 0
          },
          cheese : {
              type: Number ,
              required: true,
              default: 0
          }
    },
        price: Number ,
        customer: {
               name: String,
               street: String ,
               zipCode: String,
               country: String,
               email: String,
               deliveryMethod: String
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'users',
            required: [true, 'Review must belong to a user']
          }
});


const Order = mongoose.model("order", ordersSchema);

module.exports = Order;