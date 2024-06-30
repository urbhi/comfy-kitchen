import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://surbhisingh7049:usha1978ajit@cluster0.frzlntx.mongodb.net/Restaurant').then(()=>console.log("DB Connected"));
   
}


