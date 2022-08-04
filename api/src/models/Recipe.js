const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    resumen:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    health:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instruccions:{
      type: DataTypes.TEXT,
      allowNull: false
    }

  },{timestamps:false});
};
