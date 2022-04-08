/* eslint-disable */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contents.init(
    {
      content_img: DataTypes.STRING,
      content_text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'contents',
    },
  );
  return contents;
};
