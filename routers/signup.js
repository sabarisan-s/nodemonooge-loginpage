const express=require('express')
const router=express.Router()
const SignupController=require('../controllers/SignupController')
const SignupPostController=require('../controllers/SignupPostController')

router.route('/signup(.html)?').get(SignupController)
router.post('/signup',SignupPostController)

module.exports=router