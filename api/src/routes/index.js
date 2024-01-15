const { Router } = require("express");
const getUser = require("./usersRoutes/getUser");
const getPost = require("./postRoutes/getPost");
const getMesa = require("./mesaRoutes/getMesa");
const getLike = require("./likeRoutes/getLike");
const getComment = require("./commentRoutes/getComment");
const getChat = require("./chatRoutes/getChat");
const getAmistad = require("./amistadRoutes/getAmistad");

const router = Router();

router.use("/", getUser);
router.use("/", getPost);
router.use("/", getMesa);
router.use("/", getLike);
router.use("/", getComment);
router.use("/", getChat);
router.use("/", getAmistad);

module.exports = router;
