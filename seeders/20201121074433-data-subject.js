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

   return queryInterface.bulkInsert("Subjects", [
    {
      subject_name: "Basic Algorithm",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject_name: "Basic OOP",
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

    return queryInterface.bulkDelete("Subjects", null, {})
  }
};
