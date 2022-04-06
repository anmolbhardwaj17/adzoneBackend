const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    views:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    videoUrl:{
        type:String,
        required:true
    },
    videoThumbnail:{
        type:String,
        required:true
    },
    category:{
        type: [String]
    }
    
});

const Video = mongoose.model('VIDEO', videoSchema);
module.exports = Video;