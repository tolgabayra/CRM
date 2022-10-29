const verifyAuthToken = require("./verifyAuthToken")

const verifyAuthorizaton = (req,res,next) => {
  verifyAuthToken(req,res,() => {
    if (req.user.id === req.body.user_id) {
        next();
      } else {
        res.status(403).json("You are not alowed !!!");
      }
  })
}

module.exports = verifyAuthorizaton