// const {DataTypes}=require('sequelize')
// const sequelize=require("./index")
module.exports = (sequelize,DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        get() {
          const rawValue = this.getDataValue('firstName');
          return rawValue ? rawValue.toUpperCase() : null;
        }
        // all the thigs that we get in the form of uppercase
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: "singh",
        // if there is no default value it will take this as default value
        // allowNull defaults to true
        set(value) {
          // Storing passwords in plaintext in the database is terrible.
          // Hashing the value with an appropriate cryptographic hash function is better.
          this.setDataValue('lastName', value+"Indian");
        }
      },
    },
    {
      // Other model options go here
    //   freezeTableName: true,
      tableName: "employees",
      timestamps: false,
      //   we can also keep create date and updted date
      //   by default timestamp wiil present but we dontneed it hen it willnot shoew
      //   it will not change the tablle name
      // or else we can pass table name as the argument to it alseo
    }
  );

  return User
};
// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// module.exports=User;
