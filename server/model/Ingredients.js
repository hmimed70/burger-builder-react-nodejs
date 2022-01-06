const mongoose = require('mongoose');


ingredientsSchema = new mongoose.Schema({
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
})


const Ingredient = mongoose.model("ingredients", ingredientsSchema);

module.exports = Ingredient;