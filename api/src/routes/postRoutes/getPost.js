const { Router } = require("express");
const { getAllPost, getPostByUser, myPost } = require('../../controllers/postController/getPost')
const { createPost } = require('../../controllers/postController/postController')
const { deletePost } = require('../../controllers/postController/deletePost')

const router = Router();

router.get("/post", async (req, res) => {
  console.log("Soy el get de Post");
});

router.post('/create-post', createPost)

router.get("/allPost", getAllPost);

router.get("/post/:userId", getPostByUser);

router.get('/my-posts', myPost)

//router.put("/:postId", updatePost);

router.delete("/:postId", deletePost);

module.exports = router;