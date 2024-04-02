const { Comment, Post, User } = require("../../db");

const addComment = async (req, res) => {
  const { postId, content } = req.body;
  const user = req.user;

  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: "Publicacion no encontrada." });
    }

    const comment = await Comment.create({
      content,
      userSub: user.sub,
      postId: post.id,
    });

    res
      .status(201)
      .json({ comment, message: "Comentario agregado con exito." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addComment,
};
