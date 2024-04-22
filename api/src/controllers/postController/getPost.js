const { Post, User, Comment, Like } = require('../../db');
const { Op } = require('sequelize');

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ["sub", "name", "last_name", "image"],
            }
        })

        res.status(200).json({ posts })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// Funcion para obtener las publicaciones de un usuario en especifico
const getPostByUser = async (req, res) => {
    const { userSub } = req.params;

    try {
        const user = await User.findOne({
            where: {
                sub: userSub,
            }
        })

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const posts = await Post.findAll({
            where: {
                userSub,
            },
            include: {
                model: User,
                attributes: ["sub", "name", "last_name", "image"],
            }
        })

        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Funcion para traer mis publicaciones
const myPost = async (req, res) => {
    try {
        const currentUser = req.user;

        if (!currentUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const userPosts = await Post.findAll({
            where: { userSub: currentUser.sub },
            attributes: ["id", "content", "image", "createdAt"],
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: Comment,
                    attributes: ["id", "content"],
                    include: {
                        model: User,
                        attributes: ["sub", "name", "last_name", "image"]
                    }
                },
                {
                    model: Like,
                    attributes: ["id"],
                }
            ]
        })

        const postsWithLikes = userPosts.map(post => {
            const likesCount = post.likes ? post.likes.length : 0;
            return { ...post.toJSON(), likesCount };
        })

        res.status(200).json(postsWithLikes);
    } catch (error) {
        console.error('Error al obtener publicaciones del usuario:', error);
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllPost,
    getPostByUser,
    myPost
}