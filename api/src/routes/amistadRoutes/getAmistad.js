const { Router } = require("express");

const router = Router();

router.get("/amistad", async (req, res) => {
  console.log("Soy el get de amistad");
});

module.exports = router;