const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      sub: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        private: true, // Hace que la columna sea privada
      },
      telefono: {
        type: DataTypes.STRING,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM("admin", "docente", "client"),
        defaultValue: "client",
        allowNull: false,
      },
      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true, // Puede ser nulo inicialmente
      },
      tokenExpiration: {
        type: DataTypes.DATE,
        allowNull: true, // Puede ser nulo inicialmente
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeCreate: (user) => {
          // Genera un UUID automáticamente y asígnalo a 'sub'
          user.sub = uuidv4();
        },
      },
    }
  );
};