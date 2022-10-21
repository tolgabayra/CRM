const User = require("../models/User")
const {
    generateAccessToken,
    generateRefreshToken,
    hashPassword
} = require("../scripts/helper");


const register = async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword(req.body.password)
    })

    try {
        const user = new newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}


const login = async (req,res) => {
  const email = req.body.email
  const password = hashPassword(req.body.password)

  try {
    const user = await User.findOne({ email, password })
    if(user !== null){
        const accessToken = generateAccessToken()
    }
    
  } catch (err) {
    res.status(500).json(err)
  }
}








module.exports = {
    register,
    login
}