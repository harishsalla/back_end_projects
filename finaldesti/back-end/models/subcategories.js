module.exports = (sequelize, DataTypes) => {
    const Subcategories = sequelize.define(
      "subcategories",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        sub_categories_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
          references: {
            model: {
              tableName: "maincategories",
            },
            key: "id",
          },
        },
        code: {
          type: DataTypes.TEXT,
        },
        selected: {
          type: DataTypes.BOOLEAN,
        }
  
      },
      {
        tableName: "subcategories",
        timestamps: false,
      }
    );
  
    return Subcategories;
  };