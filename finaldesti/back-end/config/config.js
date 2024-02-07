const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('school', 'root', 'Harish@9959', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
});

const displayModel = require('../models/display')(sequelize, DataTypes);
const maincategoriesModel = require('../models/maincategories')(sequelize, DataTypes);
const subcategoriesModel = require('../models/subcategories')(sequelize, DataTypes);

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Display: displayModel,
    Maincategories: maincategoriesModel,
    Subcategories: subcategoriesModel
};

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync({ force: true }); // Sync models with the database, force:true will drop tables if they exist
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

module.exports = db;
