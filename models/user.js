'use strict'

module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('owner', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    }, created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: DataTypes.DATE,


  }, {

    });
  return Owner;
};