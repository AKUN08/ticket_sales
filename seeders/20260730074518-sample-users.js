'use strict';

const md5 = require('md5');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ongkirs', [
     {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Bambang Lipuro",
		 createdAt: new Date(),
       		 updatedAt: new Date()

            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Banguntapan",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Bantul",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Dlingo",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Imogiri",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Jetis",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Kasihan",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Kretek",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Pajangan",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Pandak",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Piyungan",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Pleret",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Pundong",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Sanden",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Sedayu",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Sewon",
 createdAt: new Date(),
        updatedAt: new Date()
            },
            {
                "province_id": "5",
                "province": "DI Yogyakarta",
                "city_id": "39",
                "city": "Bantul",
                "type": "Kabupaten",
                "subdistrict_name": "Srandakan",
                createdAt: new Date(),
                updatedAt: new Date()
            }

    ]
  )

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ongkirs', null, {});
  }
};
