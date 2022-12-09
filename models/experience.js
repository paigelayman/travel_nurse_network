'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Experience.belongsTo(models.City, {
        foreignKey: 'cityId'
      })
    }
  }
  Experience.init(
    {
      cityId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'city',
          key: 'id'
        }
      },
      photoLink: DataTypes.STRING,
      comment: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Experience',
      tableName: 'experiences'
    }
  )
  return Experience
}
