const { Router } = require("express");

const router = Router();

router.get("/mesa", async (req, res) => {
  console.log("Soy el get de Mesa");
});

module.exports = router;