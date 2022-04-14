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
      this.belongsTo(models.users, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
    }
  }
  contents.init(
    {
      user_id: DataTypes.STRING,
      content_img: DataTypes.STRING,
      content_text: DataTypes.STRING,
      content_emoji: DataTypes.STRING,
      content_weather: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'contents',
    },
  );
  return contents;
};
