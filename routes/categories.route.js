const {
    Router
} = require("express");
const router = Router();
const {
    categoriesController
} = require("../controllers/categories.controller");

router.get("/cats", categoriesController.getCats);
router.post("/cats", categoriesController.addCats);
router.delete("/cats/:id", categoriesController.deleteCatsBiId);

module.exports = router;