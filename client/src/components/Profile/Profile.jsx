// eslint-disable-next-line no-unused-vars
import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-xl p-8">
        <div className="flex items-center mb-6">
          <img src="url_de_la_imagen_de_perfil" alt="Foto de perfil" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Nombre de Usuario</h2>
            <p className="text-gray-600">Número de seguidores: 1000</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Publicaciones</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Aquí se mapearan las publicaciones del usuario y mostrarlas */}
            {/* Por ejemplo: */}
            <div className="bg-gray-200 rounded-md p-4">
              <img src="url_de_la_imagen_de_la_publicacion" alt="Publicación" className="w-full h-32 object-cover rounded-md mb-2" />
              <p className="text-sm text-gray-600">Descripción de la publicación</p>
            </div>
            {/* Fin del ejemplo */}
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Citas</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Salir</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
