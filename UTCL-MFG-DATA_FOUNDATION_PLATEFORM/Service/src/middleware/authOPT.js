const { verify } = require("jsonwebtoken");

const authOPTMiddleware = async (req, res, next) => {
  let token;

  // console.log("OPT authorization Token", req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // console.log("token", token);
      const decoded = verify(token, process.env.NODE_ENV_JWT_SECRET);

      if (decoded?.modules.includes("OPT")) {
        req.user = decoded?.userid;
        req.role = decoded?.role;
        next();
      } else {
        // return res.status(400).json({
        //   error: "Not authorized for OPT Module, token invalid",
        // });
        const error = new Error("Not authorized for OPT Module, token invalid");
        error.status = 400;
        return next(error);
      }
    } catch (error) {
      // return res.status(400).json({
      //   message: "Not authorized, token invalid",
      // });
      error.message = "Not authorized, token invalid!";
      next(error);
    }
  }

  if (!token) {
    console.log("no token");
    // res.status(401);
    // return res.status(400).json({
    //   message: "Not authorized, no token",
    // });
    const error = new Error("Not authorized, no token");
    error.status = 400;
    return next(error);
  }
};

module.exports = authOPTMiddleware;
