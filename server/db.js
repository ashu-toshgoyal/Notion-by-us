const mongo = require('mongoose')

const connection = async () =>{
   try{
    await mongo.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0');
    console.log("Connected");
   } catch(error){
    console.log(`Not Able To Connect ${error}`);
   }
};

module.exports = connection