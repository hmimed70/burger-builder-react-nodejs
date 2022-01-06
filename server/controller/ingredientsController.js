const Ingredient = require('../model/Ingredients');


exports.getIngredients = async(req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        res.status(200).json({
            status: 'Succes',
            data:  ingredients
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
}