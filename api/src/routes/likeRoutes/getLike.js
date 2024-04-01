const { Router } = require("express");
const { postLike } = require("../../controllers/likeController/postLike");
const { getLikesCount } = require("../../controllers/likeController/getLike");
const { deleteLike } = require("../../controllers/likeController/deleteLike");

const router = Router();

router.get("/like", async (req, res) => {
  console.log("Soy el get de Like");
});

// Ruta para ver todos los Likes de una publicacion
router.get("/likes/:postId", getLikesCount);

// Ruta para agregar un Like a una publicacion
router.post("/newLike", postLike);

// Ruta para eliminar un Like de una publicacion
router.delete("/deleteLike/:likeId", deleteLike);

module.exports = router;
