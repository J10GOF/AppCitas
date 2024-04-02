const { Comment, User } = require("../../db");

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const { sub: userSub } = req.user;

  try {
    const comment = await Comment.findOne({
      where: {
        id: commentId,
        userSub,
      },
    });

    if (!comment) {
      return res
        .status(404)
        .json({
          message:
            "Comentario no encontrado o no tienes permiso para eliminarlo.",
        });
    }

    await comment.destroy();

    res.status(204).json({ message: "Comentario eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteComment,
};
