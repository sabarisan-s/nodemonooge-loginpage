const UserModel = require("../models/UserModel");

SignupPostContoller = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const signupUser = await UserModel.create({
      name: name,
      phone: phone,
      email: email,
      password: password,
    });
    console.log(signupUser, "success");
    return res.status(200).redirect("/signup/?status=1");
  } catch (err) {
  
    console.log("Failed ", err.message);
    return res.status(200).redirect("/signup/?status=2");
  }
};

module.exports = SignupPostContoller;
