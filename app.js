const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

require('./db/connection');
app.use(express.json());

const Admin = require("./models/adminSchema");

app.get('/', (req, res) => {
    res.send("Initialize");
})

app.post('/auth', (req, res) => {
    const {username, password} = req.body;


    const admin = new Admin({username, password});

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
            return res.status(201).json({message:"User authenticated"})
        // }
        }else{
            return res.status(422).json({error:"Admin restricted"})
        }
        
    })    
})

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`)
})