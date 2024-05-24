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
    await queryInterface.bulkInsert('Admins', [
      {
        username_admn: 'JoDoe',
        email_admn: 'jodo@gmail.com',
        password: '1234567',
        role: 'super_admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username_admn: 'jepri',
        email_admn: 'jepri@gmail.com',
        password: '1234567',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username_admn: 'joey',
        email_admn: 'joey@gmail.com',
        password: '1234567',
        role: 'admin_staff',
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
