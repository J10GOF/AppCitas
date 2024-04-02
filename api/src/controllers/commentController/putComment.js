const { Comment, User } = require("../../db");

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  const { sub: userSub } = req.params;

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
            "Comentario no encontrado o no tienes permisos para actualizar.",
        });
    }

    comment.content = content;
    await comment.save();

    res
      .status(200)
      .json({ comment, message: "Comentario actualizado correctamente." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateComment,
};
