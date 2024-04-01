const { Like, Post, User } = require("../../db");

const deleteLike = async (req, res) => {
  const { likeId } = req.params;
  const { sub: userSub } = req.user;

  try {
    const like = await Like.findOne({
      where: {
        id: likeId,
        userSub,
      },
    });

    if (!like) {
      return res
        .status(404)
        .json({
          message: "Like no encontrado o no tienes permisos para eliminarlo.",
        });
    }

    await like.destroy();

    res.status(204).json({ message: "Like eliminado con exito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteLike,
};
