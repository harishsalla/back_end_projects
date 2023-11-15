
// /////////////////////////////////////////


const express=require("express");
const bodyPaser=require("body-parser")
const model=require('./models/index')
const User=require('./models/user')
const Contact=require("./models/contact")
const usercon=require("./controllers/userConroller");
const user = require("./models/user");
// use to convert the data in to json formate
const app=express()

app.use(bodyPaser.json())
// middle ware function to parse the daata in to json formatt

app.get("/",(req,res)=>{
    res.send("hello")
})

// app.get("/add",usercon.addUser)
app.get('/defaul',usercon.defaul)
app.post('/post',usercon.posting)
app.get('/findall',usercon.findall)
app.get('/findbyid/:id',usercon.findbyid)
app.post('/bulk',usercon.bulkcreation)
app.delete('/delete/:id',usercon.deleteUser)
app.patch('/patch/:id',usercon.patch)
// app.get('/users',usercon.getUsers)

// User.sync({force:true})
// Contact.sync({force:true})   
// if we use alter in it it will update one by one in table if things are not present in it it will update if already present it will do nothing
// if we dont use force == true in that case drop or create will not happen
// it will drop the preious table and create new table
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
app.listen(3000,()=>{
    console.log("listening to port 3000")
})