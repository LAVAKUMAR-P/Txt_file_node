const express=require("express");
const app=express();
const cors=require("cors");
const PORT=3001;
const fs=require('fs')

app.use(
    cors({
        origin:"*",
    })
)

app.use(express.json());

app.post("/create-file",function (req,res) {
    fs.writeFile(`./demo.txt`,`${new Date()}`,function (err) {
        if(err) return res.json(err)
    })
    res.json("File created")
})

app.listen(PORT,function(){
    console.log(`server is listening ${PORT}`);
})