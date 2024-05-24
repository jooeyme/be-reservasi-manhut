'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tools', [
      {
        tool_id: 'H03',
        name_tool: 'Helm pengaman',
        alamat_tool: 'gedung foresta',
        kondisi: 'Baru',
        jumlah: '100 pcs',
        deskripsi: 'Helm pelindung digunakan saat praktikum diluar ruangan',
        gambar_tool: 'gambarHelm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tool_id: 'B03',
        name_tool: 'Baju pelindung',
        alamat_tool: 'gedung foresta',
        kondisi: 'Baru',
        jumlah: '100 pcs',
        deskripsi: 'Baju pelindung digunakan saat praktikum diluar ruangan',
        gambar_tool: 'gambarbaju',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
