'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Hospital, {
        foreignKey: 'hospitalId'
      }),
        Review.belongsTo(models.User, {
          foreignKey: 'userId'
        })
    }
  }
  Review.init(
    {
      hospitalId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'hospital',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'hospital',
          key: 'id'
        }
      },
      unit: DataTypes.STRING,
      patientLoad: DataTypes.INTEGER,
      author: DataTypes.STRING,
      review: DataTypes.STRING,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
