const { Router } = require("express");

const router = Router();

router.get("/chat", async (req, res) => {
  console.log("Soy el get de chat");
});

module.exports = router;