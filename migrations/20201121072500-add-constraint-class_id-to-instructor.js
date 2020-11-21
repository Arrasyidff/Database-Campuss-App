'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.addConstraint("Instructors", {
      fields: ["class_id"],
      type: "foreign key",
      name: "add-fkey-class_id",
      references: {
        table: "Classes",
        field: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.removeConstraint("Instructors", "add-fkey-class_id")
  }
};
