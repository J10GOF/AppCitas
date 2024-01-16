const { User } = require("../../db");
const bcrypt = require("bcrypt");

const postUser = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { name, last_name, image, id, email, password, telefono, pais } =
      req.body;

    // Asignar el id como valor se 'sub'
    const sub = id;

    // Hashear la contraseña antes de gurdarla en la db
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la db con la contraseña hasheada
    const newUser = await User.create({
      sub,
      name,
      last_name,
      image,
      id,
      email,
      password: hashedPassword,
      telefono,
      pais,
    });

    await newUser.save();

    res.status(201).json({ message: "Registro exitoso.", user: newUser });
  } catch (error) {
    console.error("error al registrar usuario:", error);
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  postUser,
};
