'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject_Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subject_Class.init({
    class_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subject_Class',
  });
  return Subject_Class;
};