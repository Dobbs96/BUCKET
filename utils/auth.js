const withAuth = (req, res, next) => {
  console.log("inside withAuth function in auth.js");
  console.log(req.session.loggedIn);
  if (!req.session.loggedIn) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

module.exports = withAuth;
