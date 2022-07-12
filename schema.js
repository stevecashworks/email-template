const mongoose=require('mongoose');
 const Schema=  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    gender:String,
    location:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    invitees:{
        type:String,
        required:true
    },
    event_type:{
        type:String,
        required:true,
    },
    venue_type:{
        type:String,
        required:true,
    },
    attendance_type:{
        type:String,
        required:true,
    },
    theme:String,
    service:{
        type:Array,
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    budget:{
        type:String,
        required:true,
    }


 })
 module.exports= mongoose.model('eventSchema',Schema)