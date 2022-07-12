const express=require('express');
 const connectDb=require('./connect')
 const eventSchema=require('./schema')
 const bodyParser=require('body-parser')
 const cors=require('cors')
 const router=require('./router')
require('dotenv').config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"
 const app= express();
 app.use(cors())
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:false}))
 app.use('/sendmail',router)
 app.get('/',async(req,res)=>{
 try{
 const events =   await eventSchema.find()
    res.status(201).json(events)
 }catch(err){
    console.log(err)
 }
 })
 app.post('/',async(req,res)=>{
    try{
  const  newEvent= await eventSchema.create(req.body)
      res.status(200).json('success')
    }catch(err){
        res.status(500).json('failed')
        console.log(err)
    }
 })
 
 const PORT=  process.env.PORT||5000
 const start=async()=>{
    try{

        await connectDb(process.env.Mongo_Uri)
        app.listen(PORT, ()=>{console.log("started")})
    } catch(err){
        console.log(err)
    }

 }
 start()