// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

const Home = () => {
  // Estado para controlar qué formulario se muestra
  const [showLogin, setShowLogin] = useState(true);

  // Función para cambiar al formulario de registro
  const switchToRegister = () => {
    setShowLogin(false);
  };

  // Función para cambiar al formulario de inicio de sesión
  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="bg-purple-900 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Bienvenido a Flamen</h1>
        {/* Animaciones para los formularios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {showLogin ? (
            <form className="w-64 mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
              <input className="w-full bg-gray-200 mb-4 px-4 py-2 rounded-md focus:outline-none" type="email" placeholder="Correo electrónico" />
              <input className="w-full bg-gray-200 mb-4 px-4 py-2 rounded-md focus:outline-none" type="password" placeholder="Contraseña" />
              <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300" type="submit">Iniciar Sesión</button>
              <p className="mt-2">¿No tienes una cuenta? <span className="text-blue-500 cursor-pointer" onClick={switchToRegister}>Regístrate</span></p>
            </form>
          ) : (
            <form className="w-64 mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Registrarse</h2>
              <input className="w-full bg-gray-200 mb-2 px-4 py-2 rounded-md focus:outline-none" type="text" placeholder="Nombre" />
              <input className="w-full bg-gray-200 mb-2 px-4 py-2 rounded-md focus:outline-none" type="text" placeholder="Apellido" />
              <input className="w-full bg-gray-200 mb-2 px-4 py-2 rounded-md focus:outline-none" type="email" placeholder="Correo electrónico" />
              <input className="w-full bg-gray-200 mb-2 px-4 py-2 rounded-md focus:outline-none" type="password" placeholder="Contraseña" />
              <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300" type="submit">Registrarse</button>
              <p className="mt-2">¿Ya tienes una cuenta? <span className="text-blue-500 cursor-pointer" onClick={switchToLogin}>Iniciar Sesión</span></p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;