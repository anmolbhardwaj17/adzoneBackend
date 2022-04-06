const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

require('./db/connection');
app.use(express.json());

const Admin = require("./models/adminSchema");
const Video = require("./models/videoSchema");
const Category = require("./models/categorySchema");

app.get('/', (req, res) => {
    res.send("Initialize");
})

app.post('/auth', (req, res) => {
    const {username, password} = req.body;
    const timestamp = Date.now();


    const admin = new Admin({username, password, timestamp});

    // admin.save().then(() => {
    //     res.status(201).json({message:"User registered successfully"});
    // }).catch((err) => res.status(500).json({message:"Failed to register"}))

    if(!username || !password){
        return res.status(422).json({
            error:"Please fill the values properly"
        })
    }
    Admin.findOne({username:username})
    .then((userExist) => {
        if(userExist && password ==password){
            return res.status(201).json({message:"Admin authenticated", timestamp:timestamp})
        }else{
            return res.status(422).json({error:"Admin restricted"})
        }
        
    })    
});

app.post('/allVideos', (req, res) => {
    const title = "That Awkward Moment";
    const views = "325489"
    const description = "3 friends drama movie"
    const videoUrl = "https://www.youtube.com/watch?v=nryh_1LJQqk"
    const videoThumbnail = "https://i.ytimg.com/vi/nryh_1LJQqk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyu_WlAnDwBe1pfop2EcFd8q5big"
    const category = ["Fun","Drama","Romance"]
    const video = new Video({title, views, description, videoUrl, videoThumbnail, category});

    video.save().then(() => {
        res.status(201).json({message:"Video registered successfully"});
    }).catch((err) => res.status(500).json({message:"Failed to register"}))
})

app.post('/allCategories', (req, res) => {
    const title = "Romance";
    const thumbnailUrl = "https://www.youtube.com/watch?v=nryh_1LJQqk"
    const category = new Category({title, thumbnailUrl});
    category.save().then(() => {
        res.status(201).json({message:"Category registered successfully"});
    }).catch((err) => res.status(500).json({message:"Failed to register"}))
})

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`)
})