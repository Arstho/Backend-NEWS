const Category = require("../models/Сategory.model")

module.exports.categoriesController = {
  getCats: (req, res) => {
    Category.find().then((cats) => {
      res.json(cats)
    });
  },

  addCats: (req, res) => {
    Category.create({name: req.body.name}).then((cats) => {
      res.json(cats)
    });
  },

  deleteCatsBiId: (req, res) => {
    Category.findByIdAndDelete(req.params.id).then((cats) => {
      res.json(cats)
    });
  },
};