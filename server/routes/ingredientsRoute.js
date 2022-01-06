const express = require('express');
const ingredientsController = require('../controller/ingredientsController');
const router = express.Router();

//router.post('/',ingredientsController.addIngredients);
//router.delete('/:id',ingredientsController.deleteIngredients);

router.get('/',ingredientsController.getIngredients);
//router.get('/:id',ingredientsController.getIngredients);


module.exports = router ;
