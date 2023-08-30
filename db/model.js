const mongoose = require("mongoose")

// Creating Schema of the database
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    birthdate : {
        type : Date
    },
    paymenttype : {
        type : String,
        required : true
    }
    
})

// Creating model of the database and exporting
module.exports = mongoose.model("payment_details",schema)