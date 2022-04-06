const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    thumbnailUrl:{
        type:String,
        required:true
    }
});

const Category = mongoose.model('CATEGORY', categorySchema);
module.exports = Category;