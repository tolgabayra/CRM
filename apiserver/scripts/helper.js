const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
  
}

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY)
}

const hashPassword = (payload) => {
  return crypto.createHash("sha256").update(payload).digest("base64")
}



module.exports = {
    generateAccessToken,
    generateRefreshToken,
    hashPassword
}