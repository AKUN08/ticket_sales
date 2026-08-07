'use strict';

const md5 = require('md5');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstname: 'Martina',
        lastname: 'Ekya',
        email: 'martina@gmail.com',
        password: md5('password123'),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  )

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
