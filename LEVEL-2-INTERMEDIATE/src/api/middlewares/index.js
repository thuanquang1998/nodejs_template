module.exports = {
  isLoggedIn: (res, req, next) => {
    if (req.user) {
      next();
    } else {
      res.send(401, "Unauthorized");
    }
  },
  addNewHeaders: (req, res, next) => {
    res.setHeader("X-New-Policy", "Success");
    next();
  },
};
