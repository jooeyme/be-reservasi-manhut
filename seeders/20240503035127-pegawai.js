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
    await queryInterface.bulkInsert('Pegawais', [
      {
        name: 'Prof.Dr.Ir. Elias',
        NIP: '130933590',
        KPE: '195609021981031003',
        NIDN: '002095606',
        agama: 'Katholik',
        gender: 'Laki-laki',
        nokarpeg: 'C.0402183',
        lahir: 'Ketapang',
        ttl: '02-09-1956',
        umur: 67,
        jabatan: 'Guru Besar',
        TMT_jb: '01-05-2001',
        KUM_jb: '896',
        satyalancana: 'Komplit',
        gol_pns: 'III/a',
        TMT_pns: '01-03-1981',
        gol_pk: 'IV/e',
        TMT_pk: '01-04-2008',
        pendidikan: 'S-3',
        pensiun: '2026',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Prof.Dr.Ir. I Nengah Surati Jaya, M.Agr.',
        NIP: '131578785',
        KPE: '196109091986011001',
        NIDN: '009096108',
        agama: 'Hindu',
        gender: 'Laki-laki',
        nokarpeg: 'E.114833',
        lahir: 'Karang Asem',
        ttl: '09-09-1961',
        umur: 62,
        jabatan: 'Guru Besar',
        TMT_jb: '01-04-2007',
        KUM_jb: '1131,92',
        satyalancana: 'Komplit',
        gol_pns: 'III/a',
        TMT_pns: '01-03-1986',
        gol_pk: 'IV/e',
        TMT_pk: '01-04-2015',
        pendidikan: 'S-3',
        pensiun: '2031',
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
