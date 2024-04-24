const UserModel = require("../models/UserModel");

LoginPostController = async (req, res) => {
  const { email, password } = req.body;
  let message,
    loginsumitted = false;
  if (email == "") {
    message = "Enter Email";
    return res.render("login", {
      docTitle: "Login",
      path: "login",
      loginsumitted: true,
      message,
    });
  } else if (password == "") {
    message = "Enter Password";
    return res.render("login", {
      docTitle: "Login",
      path: "login",
      loginsumitted: true,
      message,
    });
  }
  const checkUser = await UserModel.findOne({ email: email });
if (checkUser===null) {
    message = "Invalid Email";
    return res.render("login", {
      docTitle: "Login",
      path: "login",
      loginsumitted: true,
      message,
    });
}
else if (checkUser.password!==password) {
    message = "Wrong Password";
    return res.render("login", {
      docTitle: "Login",
      path: "login",
      loginsumitted: true,
      message,
    });
}
  res.render("home", {
    docTitle: "Home",
    path: "home",
  });
};

module.exports = LoginPostController;
