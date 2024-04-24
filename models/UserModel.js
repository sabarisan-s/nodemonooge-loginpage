const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type:[String,"invail name"]
    },
    phone:{
        type:[Number,"invail numbergfddf"]
    },
    email:String,
    password:String
})

const UserModel=mongoose.model('User',UserSchema)
module.exports=UserModel