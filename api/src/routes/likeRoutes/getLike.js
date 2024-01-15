const { Router } = require("express");

const router = Router();

router.get("/like", async (req, res) => {
  console.log("Soy el get de Like");
});

module.exports = router;