const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "estudiante",
    {
      id_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    {
      // Desactivamso los timestamps.
      freezeTableName: true,
      timestamps: false,
    }
  );
};
