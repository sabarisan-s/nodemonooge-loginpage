const express=require('express')
const router=express.Router()
const HomeController=require('../controllers/HomeController')

router.route('^/$|/home(.html)?').get(HomeController)

module.exports=router