import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/estate").then(()=>{
    console.log('connected to MongoDB!');
})
.catch((err)=>{
    console.log(err);
    
})
    

const app= express();
app.listen(3000,()=>{
    console.log('server is running on port 3000 !!!');
    
});