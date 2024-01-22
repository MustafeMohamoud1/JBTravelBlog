const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recommendation extends Model {}

Recommendation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // no idea why there is an error if i don't add  vsalidate and set allowNull to true 
   country: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        },
      
    },

    city: {
      type:DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        },
           },

    place: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        },
    },
    description: {
      type: DataTypes.TEXT,
    },     
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recommendation',
  }
);

module.exports = Recommendation;
