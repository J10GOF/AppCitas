const { Router } = require("express");
const {
  postUser,
} = require("../../controllers/usersController/postUserController");
const {
  banedUser,
} = require("../../controllers/usersController/putUserController");
const {
  allUsers,
  getUser,
  getUserEmail,
  getUserRol,
} = require("../../controllers/usersController/getUserController");

const router = Router();

// router.get("/user", async (req, res) => {
//   console.log("Soy el get");
// });

// Ruta GET para todos los usuarios
router.get("/user", allUsers);

// Ruta GET para traer un usuario por su ID
router.get("/user/:id", getUser);

// Ruta GET para obtener información de un usuario por su correo electrónico.
router.get("/user/:email", getUserEmail);

// Ruta para verificar el rol del usuario
router.get("/user/rol/:sub", getUserRol);

// Ruta POST para el registro de los usuarios
router.post("/user", postUser);

// Ruta POST para iniciar sesión
router.post("/user/login", loginUser);

// Ruta PUT para banear usuarios
router.put("/user/:id", banedUser);

module.exports = router;
