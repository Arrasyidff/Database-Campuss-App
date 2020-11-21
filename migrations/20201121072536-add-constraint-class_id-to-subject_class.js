'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.addConstraint("Subject_Classes", {
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

    return queryInterface.removeConstraint("Subject_Classes", "add-fkey-class_id")
  }
};
