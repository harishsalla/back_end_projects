const {Sequelize,DataTypes}=require("sequelize");
const sequelize = new Sequelize('library', 'root', 'Harish@9959', {
    host: 'localhost',
    logging:false,
    // it will not print in the text in console
    dialect: 'mysql'
  });

//   for creating the instances
// schma means structure in the databasee
// includes database structre ,fild and tables a


const auth=async()=>{
    try{
        await sequelize.authenticate()
        console.log("connection has been secured")
    }
    catch(error){
        console.log("error")
    }
}
// authentication is not mandatory but best pratise if use it for checking the connection
auth()

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.contact=require('./contact')(sequelize,DataTypes)
db.user=require('./user')(sequelize,DataTypes)
db.sequelize.sync({alter:true})

module.exports=db;
