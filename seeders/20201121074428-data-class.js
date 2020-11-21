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

   return queryInterface.bulkInsert("Classes", [
    {
      class_name: "CA183",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      class_name: "CB183",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      class_name: "CC183",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      class_name: "CD183",
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

    return queryInterface.bulkDelete("Classes", null, {})
  }
};
