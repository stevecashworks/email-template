const mongoose= require('mongoose');
  const connectDb= async(uri)=>{
try {
     return mongoose.connect(uri)
} catch (error) {
     console.log(error)
}
  }
  module.exports= connectDb