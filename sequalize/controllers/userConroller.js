const db=require("../models")
const User=db.user
const { Op } = require("sequelize");
const {Sequelize,DataTypes}=require("sequelize");

// let addUser= async (req,res)=>{
//     // const jane=User.build({firstname:"hello"});
//     console.log("outside call-1")
//     const jane= await User.create({firstName:"harish",lastName:"you"})
//     console.log(jane instanceof User)
//     console.log(jane.firstname)
//     // jane.set({firstName:"anu",lastName:"kk"});
//     // jane.save()
//     // const incrementResult = await jane.increment('age', { by: 2 });
//     // to incremet the data
//     // if we use the set method then we need to use the save method
//     // await jane.save();
//     // we can use it afteer the create method
//     // await jane.update({firstName:"heel"})
//     // we can also use updateit will do the same
    // jane.destoy()
    // to delete the things in the data base
    //we can alse use thhe reload to get the data which was created in first instance after the ussng the set or update method
//     console.log("jane was saved to database")
//     console.log(jane.toJSON());
//     res.status(200).json(jane.toJSON());

// }


// creating the values bydefault

const defaul= async(req,res)=>{
    await User.create({firstName:"rahul",lastName:"siplijung"})
    console.log("added to data base")


}

// posting the single value
const posting=async(req,res)=>{
    const value=req.body
    const add=await User.create(value)

    res.status(200).json({data:"added succesfully"})
}

// finding all values from database

const findall=async(req,res)=>{
    try{
        const value=await User.findAll({})
        console.log(value)
        res.status(200).json({data:value})
    }
    catch(error){
        res.status(400).json({error:"not finding all"})
    }
}

// fndng the values using specific values
const findbyid=async(req,res)=>{
    try{
        let value=await User.findAll({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({data:value})
    }
    catch(error){
        res.status(400).json({error:"not added to it"})
        
    }
}

// creating the bulk users

const bulkcreation=async(req,res)=>{
    try{
        const final=await User.bulkCreate(req.body)
    
        const value=await User.findAll({})
        console.log(value)
        res.status(200).json({data:"added to the data base"})
    }
    catch(error){
        res.status(400).json({data:"not added to the data base "})
    }
}

// for deleting the users

const deleteUser=async(req,res)=>{
    try{
        const delet = await User.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({status:delet})
    }
    catch(error){
        res.status(400).json({error:error})
    }
}

// to patch the data from the data base
const patch=async(req,res)=>{
    const value=req.body
    try{
        const data=await User.update(value,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({status:data})
    }
    catch(error){
        res.status(400).json({json:"not pathed to data base"})
    }
}

// model querrying
const defaul=async(req,res)=>{
    try{
        const user = await User.create({
            firstName: 'alice123',
            lastName: true
          }, { fields: ['firstName'] });
        res.status(200).json({data:"added to the data base"})
    }
    catch(error){
        res.status(400).json({data:"not added to the data base "})
    }
    // in this case it will add only the data mention in the in fields only not all the data
}
// model basic qurreying
const onlyatt=async(req,res)=>{
  try{
    const value=await User.findAll({
        attributes:["id","firstName"]
        // it was same as /select firstname,id from table
    })
    res.status(200).json({status:'send the data'})
  }
  catch(error){
    res.status(400).json({data:"error"})
  }
}

// model alising
const alising=async(req,res)=>{
    try{
      const value=await User.findAll({
          attributes:["id",["firstName",["first_name"]]]
          // it was same as /select firstname,id from table
      })
      res.status(200).json({status:'send the data'})
    }
    catch(error){
      res.status(400).json({data:"error"})
    }
  }
//   agrigations
const aggrigations=async(req,res)=>{
    try{
      const value=await User.findAll({
          attributes:["id",["firstName",["first_name"]],
        [Sequelize.fn('COUNT',Sequelize.col('id')),'count']]
          // it was same as /select firstname,id from table
      })
      res.status(200).json({status:'send the data'})
    }
    catch(error){
      res.status(400).json({data:"error"})
    }
  }

//   eclude
const exclude =async(req,res)=>{
    try{
        const data=User.findAll({
            attributes:{exclude:["firstName","lastName"],
             // it will exclude theboth first name nd lastanme and print he data
        include:['id',[Sequelize.fn('COUNT',Sequelize.col('id')),'count']]}
                // it will exclude the data and print 
        })
    }
}
// operand
const opernd =async(req,res)=>{
    try{
        const data=User.findAll({
            where: {
              id: {
                [Op.eq]: 2
              }
            }
          });


        // in order to work with the operation systems we need to usethe following 
    }
}

const operndn =async(req,res)=>{
    try{
        const data=User.findAll({
            where: {
              [Op.and]: [
                { Id: 12 },
                { firstName: 'harish' }
              ]
            }
          });
          


        // in order to work with the operation systems we need to usethe following 
    }
}


const ordering =async(req,res)=>{
    try{
        const data=User.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['title', 'DESC'],
          ]});
          


        // in order to work with the operation systems we need to usethe following 
    }
}

// query finder and find function
const ordering =async(req,res)=>{
    try{
        const data=User.findAll({
           where:{
            lastName:"singh"
           }}); 
}
// as find all will find the all th records from the data base


// find by findOne --it will find only on record from the database
// find by pk--it will find the value by the primary key
// findorcreate---if it matches it will give values or elseitwill create the data in database
// it wiil give true or flse based on entry in database
// findandcount---it will find and count the dta in data base



// getters and setter and virtuals
// getteers are actually to get the data from the datta base in required form
// it was used in the define state only
// suppose we want the names in capital form from the data base we can use the geetter function or
// we can say i nedd to inclde mr in front of every value
// setter
// before setting the valuein data base like password

// virtuals
// suppose wwe need to combine the firstname and last name of the by using virtual


// validate error or validate users
const validate=async(req,res)=>{
    // const message;
    const data={}
    let messages={}
    try{
        data=await User.create({
            firstName:"Arunkumar234",
            // like the validate we have taken theh is alpha is true
            lastName:"sall"
        })
    }
    // by using catch method we can handle the errors
    catch(e){
        let message;
        e.error.forEach(error => {
            switch(error.validatoryKey){
                // validator key will happen beacause of the case thng
                case "isAlpha":
                    message="only alphabets are available"
                    break;
                case "isLowercase":
                    message="only lower case is allowed"
                    break;
            }
            messages[error.path]=message
            // by using error.path we will get the path 
            
        });


    }
    res.status(200).json({data:data,messages:messages})
}


const rawquery=async(req,res)=>{
    const [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12");
// Results will be an empty array and metadata will contain the number of affected rows.
const { QueryTypes } = require('sequelize');
const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
// We didn't need to destructure the result here - the results were returned directly
    res.status(200).json({data:data,messages:messages})

}




module.exports={
   defaul,posting,findall,findbyid,bulkcreation,deleteUser,patch,defaul
}