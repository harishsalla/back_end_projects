const { DataTypes } = require('sequelize');
const db = require('./subcategories');
module.exports = (sequelize, DataTypes) => {
    const Maincategories = sequelize.define(
      "maincategories",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        templete_type:{
            type:DataTypes.TEXT,
        },
        
      },
      {
        tableName: "maincategories",
        timestamps: false,
      }
    );
    const Subcategories = db.Subcategories;

    Maincategories.hasMany(Subcategories, {
      foreignKey: "sub_categories_id",
      as: "sub_categories_id",
      foreignKeyConstraint: true
    });
  
    return Maincategories;
  };