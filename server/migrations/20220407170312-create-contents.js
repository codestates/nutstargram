/* eslint-disable */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content_img: {
        type: Sequelize.STRING,
      },
      content_text: {
        type: Sequelize.STRING,
      },
      content_emoji: {
        type: Sequelize.STRING,
      },
      content_weather: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contents');
  },
};
