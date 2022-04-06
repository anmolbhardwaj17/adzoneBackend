const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    timestamp:{
        type:Number,
        required:true
    }
});

const Admin = mongoose.model('ADMIN', adminSchema);
module.exports = Admin;