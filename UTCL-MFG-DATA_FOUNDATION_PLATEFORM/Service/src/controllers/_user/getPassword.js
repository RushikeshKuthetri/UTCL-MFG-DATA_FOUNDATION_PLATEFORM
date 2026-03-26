const { genSalt, hash } = require("bcryptjs");
module.exports = {
  getPassword: async (req, res, next) => {
    const { password } = req.body;

    // console.log(password);
    const salt = await genSalt();
    const passwordHash = await hash(password, salt);

    res.json({ hashedPassword: passwordHash });
  },
};
