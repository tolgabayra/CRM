const User = require("../models/User")
const {
    generateAccessToken,
    generateRefreshToken,
    hashPassword
} = require("../scripts/helper");


const register = async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword(req.body.password)
        })
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}


const login = async (req, res) => {
    const email = req.body.email
    const password = hashPassword(req.body.password)

    try {
        const user = await User.findOne({ email, password })
        if (user !== null) {
            const data = {
                "id": user._id,
                "username": user.username
            }
            const accessToken = generateAccessToken(data)
            const refreshToken = generateRefreshToken(data)

            res.cookie("access_token", accessToken,{
                httpOnly: true
            })
            res.cookie("refresh_token", refreshToken,{
                httpOnly: true
            })
            res.status(200).json(user)
        }else{
            res.status(401).json("Wrong Credentials")
        }

    } catch (err) {
        res.status(500).json(err)
    }
}



const logout = (req,res) => {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
    res.status(200).json('Logout is Successfully')
}







module.exports = {
    register,
    login,
    logout
}