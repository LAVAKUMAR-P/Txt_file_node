const express=require("express");
const app=express();
const cors=require("cors");
const PORT=3001;
const path = require('path');
const fs=require('fs');


app.use(
    cors({
        origin:"*",
    })
)

app.use(express.json());

//to get file detais from directory

app.post("/",async function (req,res) {
    try {
        fs.readdir(`${__dirname}`,{withFileTypes:true},(err,data)=>{
            if(err){
                return res.json(err)
            }
            const result = []; 
            for (const entry of data) {
                result.push({name: entry.name, type: entry.isDirectory() ? "folder" : "file", ext: path.extname(entry.name)});
            }
         res.json(result);
        })
    } catch (error) {
        res.json(`status:failed & ${error}`);
    }
   
})

// to create file in ditrectory

app.post("/create-file",function (req,res) {
    let today = new Date();
    let currentDate=`${today.getDate()}-${today.getDay()}-${today.getFullYear()}` ;
    let currentTime=`${today.getHours()}-${today.getMinutes()}`; 
    fs.writeFile(`./${currentDate}-${currentTime}.txt`,`${today}`,function (err) {
        if(err) {
            res.json("File not created")
            return res.json(err)
        } 
    })
    res.json("File created")
})

app.listen(PORT,function(){
    console.log(`server is listening ${PORT}`);
})