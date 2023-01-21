const Comment = require("../models/Сomment.model");

module.exports.commentController = {
  getComm: (req, res) => {
    Comment.find({
      news: req.body.newsId
    }).populate("news").then((comment) => {
      res.json(comment)
    });
  },

  deleteComm: (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((comment) => {
      res.json(comment)
    });
  },

  addComm: (req, res) => {
    Comment.create({
      name: req.body.name,
      text: req.body.text,
      news: req.body.news,
    }).then((comment) => {
      res.json(comment)
    });
  },
};