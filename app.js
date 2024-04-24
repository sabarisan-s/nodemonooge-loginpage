const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const database=require('./models/database')

database()

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const HomeRouter=require('./routers/home')
app.use(HomeRouter)

const LoginRouter=require('./routers/login')
app.use(LoginRouter)

const SignupRouter=require('./routers/signup')
app.use(SignupRouter)


app.listen(3000,()=>{
    console.log("server running");
})
