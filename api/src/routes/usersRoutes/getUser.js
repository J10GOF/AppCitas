const { Router } = require("express");

const router = Router();

router.get("/user", async (req, res) => {
  console.log("Soy el get");
});

module.exports = router;
