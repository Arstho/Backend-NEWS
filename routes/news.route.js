const {
    Router
} = require("express");
const router = Router();
const {
    newsController
} = require("../controllers/news.controller");

router.get("/news", newsController.getNews);
router.post("/news", newsController.addNews);
router.get("/news/:id", newsController.getNewsById);
router.get("/news/cats/:categoryId", newsController.getNewsByCat);
router.delete("/news/:id", newsController.deleteNewsBiId);
router.patch("/news/:id", newsController.patchNewsId);

module.exports = router;