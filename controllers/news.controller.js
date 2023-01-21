const News = require("../models/News.model")

module.exports.newsController = {
  getNews: (req, res) => {
    News.find().populate("category").then((news) => {
      res.json(news)
    });
  },

  getNewsById: (req, res) => {
    News.findById(req.params.id).then((news) => {
      res.json(news)
    });
  },

  addNews: (req, res) => {
    News.create({
      title: req.body.title,
      text: req.body.text,
      category: req.body.category,
    }).then((news) => {
      res.json(news)
    });
  },

  getNewsByCat: (req, res) => {
    News.find({
        category: req.params.categoryId
      })
      .populate('category')
      .then((news) => {
        res.json(news)
      });
  },

  deleteNewsBiId: (req, res) => {
    News.findByIdAndDelete(req.params.id).then((news) => {
      res.json(news)
    });
  },

  patchNewsId: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {title: req.body.title, text: req.body.text}).then((news) => {
      res.json(news)
    });
  }
};