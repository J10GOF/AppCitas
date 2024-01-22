const { User } = require("../db");

const verifyRol = async (sub) => {
  try {
    const user = await User.findOne({
      where: {
        sub: sub,
      },
    });

    if (!user) {
      throw new Error("No se encontro el usuario.");
    }
    return user.rol;
  } catch (error) {
    throw error;
  }
};

module.exports = { verifyRol };
