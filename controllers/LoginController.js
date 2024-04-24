
LoginController=(req,res)=>{
    res.render('login',{
        docTitle:"Login",
        path:"login",
        loginsumitted:false,message:' '
    })
}
module.exports=LoginController