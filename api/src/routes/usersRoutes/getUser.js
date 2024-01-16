const { Router } = require("express");
const {
  postUser,
} = require("../../controllers/usersController/postUserController");
const {
  banedUser,
} = require("../../controllers/usersController/putUserController");

const router = Router();

router.get("/user", async (req, res) => {
  console.log("Soy el get");
});

// Ruta POST para el registro de los usuarios
router.post("/user", postUser);

// Ruta PUT para banear usuarios
router.put("/user/:id", banedUser);

module.exports = router;
