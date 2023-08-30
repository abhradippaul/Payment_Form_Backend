// Importing Express module
const express = require("express")
const router = express.Router()

// Importing model
const model = require("../../db/model")

// Post request for payment
router.post("/",async(req,res)=>{
    
    // Inserting data to database
    await model.collection.insertOne(req.body)
    console.log(req.body)
    res.send(req.body)
})

module.exports = router