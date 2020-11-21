'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Instructor.belongsTo(
        models.Class, {
          targetKey: "id",
          foreignKey: "class_id"
        }
      )
    }
  };
  Instructor.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_year: DataTypes.DATEONLY,
    image: DataTypes.STRING,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Instructor',
  });
  return Instructor;
};