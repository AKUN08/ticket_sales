'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ongkir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ongkir.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subdistrict_id: DataTypes.INTEGER,
    province_id: DataTypes.INTEGER,
    province: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    type: DataTypes.STRING,
    subdistrict_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ongkir',
  });
  return ongkir;
};