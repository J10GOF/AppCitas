const { Router } = require("express");

const router = Router();

router.get("/post", async (req, res) => {
  console.log("Soy el get de Post");
});

module.exports = router;