const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())
app.use(require("./routes/news.route"));
app.use(require("./routes/categories.route"))
app.use(require("./routes/comments.route"))

mongoose.connect("mongodb+srv://Aslan:1123@cluster0.w5uga6x.mongodb.net/news111", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3500, () => {
  console.log('Сервер запущен успешно')
})