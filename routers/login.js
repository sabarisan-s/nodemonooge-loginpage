const express=require('express')
const router=express.Router()
const LoginController=require('../controllers/LoginController')
const LoginPostController=require('../controllers/LoginPostController')

router.route('/login(.html)?').get(LoginController)
router.route('/login').post(LoginPostController)

module.exports=router