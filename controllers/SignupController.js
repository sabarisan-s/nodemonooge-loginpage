
SignupContoller = (req, res) => {
  const status = req.query.status;
  let signupsubmited;
  switch (status) {
    case "1":
      signupsubmited = "success";
      break;
    case "2":
      signupsubmited = "failed";
      break;

    default:
      break;
  }
  res.render("signup", {
    docTitle: "Signup",
    path: "signup",
    signupsubmited,
  });
};


module.exports = SignupContoller
