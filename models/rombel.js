"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rombel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rombel.init(
    {
      kodeRombel: DataTypes.STRING,
      namaRombel: DataTypes.STRING,
      jumlahSiswa: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "rombel",
    }
  );
  return rombel;
};
