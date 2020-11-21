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
      fields: ["subject_id"],
      type: "foreign key",
      name: "add-fkey-subject_id",
      references: {
        table: "Subjects",
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

    return queryInterface.removeConstraint("Subjects", "add-fkey-subject_id")
  }
};
