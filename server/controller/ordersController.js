const Order = require('../model/Order');

exports.addOrder = async (req, res) => {
    try{
    const order = await Order.create(req.body);
  res.status(201).json({
    status: 'success',
    data: order
  });
 }
 catch(err) {
     res.status(404).json({
     status: 'fail' ,
     msg: 'error orderd not added'
   })
 }
};

exports.getAllOrders = async(req,res ) => {
  try {
    const orders = await Order.find({ });

    res.status(200).json({
        status: 'Succes',
        data:  orders
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
       message: "Server Error",
       eRR: error.response
       });
  }

}

exports.getUserOrder = async(req,res ) => {
  try {
    const orders = await Order.find({user: req.params.user});

    res.status(200).json({
        status: 'Succes',
        data:  orders
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
       message: "you Don't have Order yet",
       err: error.response
       });
  }

}
