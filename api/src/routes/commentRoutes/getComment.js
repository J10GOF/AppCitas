const { Router } = require("express");

const router = Router();

router.get("/comment", async (req, res) => {
  console.log("Soy el get de comment");
});

module.exports = router;