const { Comment, User } = require("../../db");

const getComment = async (req, res) => {
  const postId = req.params.postId;

  if (!postId) {
    return res.status(400).json({ error: "postId es requerido" });
  }

  try {
    const comments = await Comment.findAll({
      where: { postId: postId },
      include: {
        model: User,
        attributes: ["name", "last_name"],
        as: "user",
      },
    });

    res.status(200).json({ comments });
  } catch (error) {
    console.error("Error al traer los comentarios:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getComment,
};
