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
    await queryInterface.bulkInsert('Rooms', [
      {
        room_id: 'M01',
    	  name_room: 'Ruang Matoa',
    	  alamat_room: 'jl.fahutan',
    	  kapasitas: '10 orang',
    	  luas: '30 m2',
    	  deskripsi_room: 'Ruang sidang Matoa biasa digunakan untuk ...',
    	  fasilitas: 'kursi 10 pcs, meja, ac, tisu',
    	  gambar_room: 'gambarmatoa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        room_id: 'F01',
    	  name_room: 'Ruang Sidang Foresta',
    	  alamat_room: 'jl.fahutan',
    	  kapasitas: '50 orang',
    	  luas: '70 m2',
    	  deskripsi_room: 'Ruang sidang Matoa biasa digunakan untuk ...',
    	  fasilitas: 'kursi 50 pcs, meja, ac, tisu, proyektor, LCD',
    	  gambar_room: 'gambarforesta',
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
