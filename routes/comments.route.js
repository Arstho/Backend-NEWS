const {
    Router
} = require("express");
const { commentController } = require("../controllers/comments.controller");
const router = Router();


router.get("/comment", commentController.getComm);
router.post("/comment", commentController.addComm);
router.delete("/comment/:id", commentController.deleteComm);

module.exports = router;