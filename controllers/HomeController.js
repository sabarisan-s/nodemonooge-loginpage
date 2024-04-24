
HomeController=(req,res,next)=>{
    res.render('home',{
        docTitle:"Home",
        path:"home"
    })
}
module.exports=HomeController


