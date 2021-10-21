const express=require("express");
const app=express();
const cors=require("cors");
const PORT=3001;

app.use(
    cors({
        origin:"*",
    })
)

app.use(express.json());

app.listen(PORT,function(){
    console.log(`server is listening ${PORT}`);
})