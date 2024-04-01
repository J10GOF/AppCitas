const { Like, Post, User } = require("../../db");

const postLike = async (req, res) => {
  const { postId } = req.body;
  const user = req.user;

  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: "Publicacion no encontrada." });
    }

    const like = await Like.create({
      postId: post.id,
      userSub: user.sub,
    });

    res.status(201).json({ like, message: "El Like se agrego correctamente." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postLike,
};
