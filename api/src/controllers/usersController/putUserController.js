const { User } = require("../../db");

const banedUser = async (req, res) => {
  try {
    const id = req.params.id;

    // Encuentra al usuario por si id en la db;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Actualiza el estado de ban del usuario
    user.banned = !user.banned; // si esta baneado lo desbanea; si no, lo banea

    // Guardamos los cambios en la db
    await user.save();

    res
      .status(200)
      .json({
        message: `Usuario ${
          user.banned ? "baneado" : "desbaneado"
        } correctamente`,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    banedUser
}