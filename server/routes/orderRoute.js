const express = require('express');
const ordersController = require('../controller/ordersController');
const authController = require('../controller/authController')
const router = express.Router();


router.post('/',authController.protect, ordersController.addOrder);
//router.delete('/:id',authController.protect, postsController.deleteOrder);

router.get('/:user',authController.protect,ordersController.getUserOrder);
//router.get('/:id',ordersController.getOrder);


module.exports = router ;
