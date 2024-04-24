const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type:[String,"invalid name"]
    },
    phone:{
        type:[Number,"invalid number"]
    },
    email:String,
    password:String
})

const UserModel=mongoose.model('User',UserSchema)
module.exports=UserModel