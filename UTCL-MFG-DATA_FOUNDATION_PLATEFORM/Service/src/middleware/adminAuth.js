const { verify } = require("jsonwebtoken");

const adminAuth = async (req, res, next) => {
  let token;

  // console.log("req.headers.authorization", req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // console.log("token", token);
      const decoded = verify(token, process.env.NODE_ENV_JWT_SECRET);

      // console.log(decoded);

      if (decoded?.role == "admin" || decoded?.role == "super_admin") {
        req.user = decoded?.userid;
        req.role = decoded?.role;
        next();
      } else {
        return res.status(400).json({
          error: "Not authorized for admin access, token invalid",
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: "Not authorized for admin access, token invalid",
      });
    }
  }

  if (!token) {
    // console.log("no token");
    // res.status(401);
    return res.status(400).json({
      error: "Not authorized, no token",
    });
  }
};

module.exports = adminAuth;
