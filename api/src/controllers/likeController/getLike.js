const { Like, Post, User } = require("../../db");

const getLikesCount = async (req, res) => {
  try {
    const { postId } = req.params;

    const LikesCount = await Like.count({
      where: {
        postId: postId,
      },
    });

    res.status(200).json({ LikesCount });
  } catch (error) {
    console.error("Error al obtener la cantidad de likes:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getLikesCount,
};
