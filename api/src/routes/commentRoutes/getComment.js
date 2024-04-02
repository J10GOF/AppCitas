const { Router } = require("express");
const {
  addComment,
} = require("../../controllers/commentController/postComment");
const {
  getComment,
} = require("../../controllers/commentController/getComment");
const {
  updateComment,
} = require("../../controllers/commentController/putComment");
const {
  deleteComment,
} = require("../../controllers/commentController/deleteComment");

const router = Router();

router.get("/comment", async (req, res) => {
  console.log("Soy el get de comment");
});

router.post("/comment", addComment);

router.get("/comments", getComment);

router.put("/comment/:id", updateComment);

router.delete("/comment/:commentId", deleteComment);

module.exports = router;
