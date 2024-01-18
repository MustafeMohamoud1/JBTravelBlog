const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recommendations extends Model {}

Recommendations.init(
  {
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },    
    attractions:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    city: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'project',
  }
);

module.exports = Recommendations;
