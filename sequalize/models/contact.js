// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

module.exports = (sequelize,DataTypes) => {
  const Contact = sequelize.define("contact", {
    permenant_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_adddress: {
      type: DataTypes.STRING,
      defaultValue: "home",
      // if there is no default value it will take this as default value
      // allowNull defaults to true
    },
  });

  // module.exports=Contact

  return Contact;
};
