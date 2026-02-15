const { json } = require('body-parser');
const connectmongodb = require('./db')

const express = require('express');
const { prototype } = require('node:events');

const app = express();

connectmongodb();

app.use(express.json);

app.get('/',(req,res)=>{
    res.send("Server is Running");
})

app.listen(5000,()=>{
    console.log(`Server Running on ${5000}`)
});
