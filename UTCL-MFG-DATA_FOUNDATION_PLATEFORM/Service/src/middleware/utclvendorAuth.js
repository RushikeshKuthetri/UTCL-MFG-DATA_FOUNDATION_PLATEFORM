const { verify } = require("jsonwebtoken");

const vendorAuthMiddleware = async (req, res, next) => {
  let token;

  // console.debug("req.headers.authorization", req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // console.debug("token", token);
      const decoded = verify(token, process.env.NODE_ENV_JWT_SECRET_VENDOR);
      // const decoded = verify(token, "demoSecretKeyUltra");
      // console.debug(decoded);
      // console.log("Vendor Middleware Decoded", decoded);

      if (decoded.userid) {
        req.plantAccess = decoded.Plant_Name;
        req.sapCode = decoded.Plant_SapCode;
        req.user = decoded.userid;
        req.tokenExpiresAt = new Date(decoded.exp * 1000);
        next();
      } else {
        // return res
        //   .status(401)
        //   .json({ message: "Not authorized, token invalid" });
        const error = new Error("Not authorized, token invalid");
        error.status = 401;
        return next(error);
      }
    } catch (error) {
      // return res.status(400).json({
      //   message: "Not authorized, token invalid",
      // });
      error.message = "Token Expired!"
      next(error);
    }
  }

  if (!token) {
    console.debug("no token");
    // res.status(401);
    // return res.status(400).json({
    //   message: "Not authorized, no token",
    // });
    const error = new Error("Not authorized, no token"); // custom message
    error.status = 400; // Optional: custom HTTP status code
    return next(error);
  }
};

module.exports = vendorAuthMiddleware;
