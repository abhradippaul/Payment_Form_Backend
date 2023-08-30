// Saving payment information to the server

// Requiring Express.JS
const express = require("express")
const app = express()

// Requiring Dotenv library for security
require("dotenv").config()

// Requiring Database
require("./db/connection")

// Browser post request
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Importing payment route
const payment = require("./routes/payment/payment")
app.use("/payment",payment)

// Home Page route
app.get("/",(req,res)=>{
    res.send("Welcome to Payment HOME PAGE")
})

// Server listing
app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})