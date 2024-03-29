// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const LandigPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-purple-900 h-screen flex items-center justify-center text-white">
      <div className="text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a Flamen</h1>
        <p className="text-lg mb-8">Tu aplicación de citas favorita</p>
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/Home")}
        >
          Explorar Citas
        </button>
      </div>
    </div>
  );
};

export default LandigPage;
