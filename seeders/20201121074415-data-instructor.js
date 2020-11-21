'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert("Instructors", [
      {
        first_name: "Arrasyid",
        last_name: "Fadel Fatonsyah",
        username: "arfafa",
        gender: "male",
        birth_year: "1999-02-08",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Ardhian",
        last_name: "Khairul Hakim",
        username: "arkha",
        gender: "male",
        birth_year: null,
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Ahmad",
        last_name: "Habibur Ridlo",
        username: "kira",
        gender: "male",
        birth_year: null,
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: "Adha",
        last_name: "Kusuma Hidayat",
        username: "adha",
        gender: "male",
        birth_year: null,
        image: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("Instructors", null, {})
  }
};
