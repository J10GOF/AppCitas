const { User } = require("../../db");
const { Op } = require("sequelize");

// Ruta GET para todos los usuarios
const allUsers = async (req, res) => {
  const name = req.query.name;
  try {
    let totalUsers;

    if (name) {
      totalUsers = await User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
          deleted: false,
        },
      });
    } else {
      totalUsers = await User.findAll({
        where: {
          deleted: false,
        },
      });
    }
    res.status(200).json(totalUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Ruta GET para obtener un usaurio por su ID
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
    });

    if (user) {
      user.password = null;
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Ruta GET para obtener información de un usuario por su correo electrónico.
const getUserEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const userEmail = await User.findOne({
      where: { email },
      attributes: { exclude: ["password"] },
    });
    if (userEmail) {
      userEmail.password = null;

      res.status(200).json(userEmail);
    } else {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ruta para verificar el rol del usuario
const getUserRol = async (req, res) => {
  const { sub } = req.params;

  try {
    const rol = await verifyRol(sub);
    res.status(200).json({ rol });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  allUsers,
  getUser,
  getUserEmail,
  getUserRol,
};
