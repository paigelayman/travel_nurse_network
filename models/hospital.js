'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hospital.belongsTo(models.City, {
        foreignKey: 'cityId'
      }),
        Hospital.hasMany(models.Review, {
          as: 'facility',
          foreignKey: 'hospitalId'
        })
    }
  }
  Hospital.init(
    {
      cityId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'city',
          key: 'id'
        }
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Hospital',
      tableName: 'hospitals'
    }
  )
  return Hospital
}
