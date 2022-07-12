 const  express=require('express');
 const nodemailer=require('nodemailer');

 const Router= express.Router();
 Router.route('/').post(
    (req,res)=>{
        const{email,message}=req.body
       const transporter=nodemailer.createTransport({
          service:'gmail',
          auth:{
             user:'eventsnorwood@gmail.com',
              pass:'ldxybwgafkzoijwn',

          }})
          const options={
             from:'eventsnorwood@gmail.com',
             to:email,
             subject:"Norwood events",
             text:message
    
          }
          transporter.sendMail(options,(err,info)=>{
             if(err){
                console.log(err);
                res.status(403).json({success:false})
                return;
             }else{
                console.log(info.response)
                res.status(201).json({sucess:true})
             }
          })
        }
 )
 module.exports=Router