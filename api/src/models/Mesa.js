const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "mesa",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
