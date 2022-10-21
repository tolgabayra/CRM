const jwt = require('jsonwebtoken');

const verifyAuthToken = (req, res, next) => {
    const authHeader = req.cookies.access_token;
    console.log(authHeader);
    if (authHeader) {
  
      jwt.verify(authHeader, process.env.JWT_SECRET_KEY , (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid!");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated!");
    }
  };



module.exports  = verifyAuthToken