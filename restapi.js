const express=require('express');
const {connectionMondodb}=require('./connection')
const {logReqRes} =require('./midlleware/index')
const Userroter=require('./routes/user');


const aap=express();

const PORT=8000;



// connection of mongodb
connectionMondodb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>{
    console.log("mongodb connected");
    
});



// middleware-plugin
aap.use(express.urlencoded({extended:false}));


// Create Middleware 
aap.use(logReqRes('log.txt'));

// routes
aap.use("/api/users",Userroter);



aap.listen(PORT,()=>{
    console.log(`server started at PORT:${PORT}`);
    
})