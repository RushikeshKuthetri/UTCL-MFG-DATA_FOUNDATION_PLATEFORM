const { verify } = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
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

      if (decoded?.modules.includes("Mimics")) {
        req.user = decoded?.userid;
        req.role = decoded?.role;
        next();
      } else {
        // return res.status(400).json({
        //   error: "Not authorized for Mimics Module, token invalid",
        // });
        const error = new Error(
          "Not authorized for Mimics Module, token invalid"
        );
        error.status = 403;
        return next(error);
      }
    } catch (error) {
      // return res.status(400).json({
      //   message: "Not authorized, token invalid",
      // });
      error.message = "Not authorized, token invalid";
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
    error.status = 401;
    return next(error);
  }
};

module.exports = authMiddleware;
