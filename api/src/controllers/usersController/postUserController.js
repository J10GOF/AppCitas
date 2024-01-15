const { User } = require('../../db')
const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
    try{
        // Obtener los datos del cuerpo de la solicitud
        const {
            name, last_name, image, id, email, contraseña, telefono,
            pais
        } = req.body;

        // Asignar el id como valor se 'sub'
        const sub = id;

        // Hashear la contraseña antes de gurdarla en la db
        const hashedPassword = await bcrypt.hash(contraseña, 10);
    }
    catch(error){
        console.error('')
    }
}