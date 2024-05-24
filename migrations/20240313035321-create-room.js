'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_id: {
        type: Sequelize.STRING
      },
      name_room: {
        type: Sequelize.STRING
      },
      alamat_room: {
        type: Sequelize.STRING
      },
      kapasitas: {
        type: Sequelize.STRING
      },
      luas: {
        type: Sequelize.STRING
      },
      deskripsi_room: {
        type: Sequelize.TEXT
      },
      fasilitas: {
        type: Sequelize.TEXT
      },
      gambar_room: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};