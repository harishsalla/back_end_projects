
module.exports = (sequelize, DataTypes) => {
    const Display = sequelize.define(
      "google_form",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        question: {
          type: DataTypes.TEXT,
        },
        question_type: {
          type: DataTypes.TEXT,
        },
      },
      {
        tableName: "google_form",
        timestamps: false,
      }
    );
  
    return Display;
  };
  