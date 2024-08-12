const mongoose = require('mongoose');
const express = require('express')
const app = express()

const userRoute = require('./routes/userRoute.js');

app.use('/',userRoute);

app.get('/',(req,res) => {
    res.send("Hello from Data");
})





mongoose.connect("mongodb+srv://jaywani22:tAGM5D1PTUYQ9TuY@exceldata.atq4nww.mongodb.net/Node-API?retryWrites=true&w=majority&appName=EXCELDATA")
.then(()=> {
    console.log("Connected to the database");
    app.listen(3000, () => { 
        console.log("Server is running on port 3000");
    } )
})
.catch (() => {

    console.log("Failed to connect to the database");
})