const User = require("../models/User")
const UserPassResetToken = require("../models/UserPassResetToken")
const { uuidv4 } = require("uuid")
const { hashPassword } = require("../scripts/helper")

const createPasswordLink = async (req,res) => {
  const email = req.body.email
  const datetime = new Date();

  try {
    const user = await User.findOne({ email })
    console.log(user);
    if(user){
        const data = {
            token: hashPassword(user.email),
            user_id: user._id,
            validity_date : datetime.toLocaleString()
        }
        const token_data = new UserPassResetToken(data)
        const result = await token_data.save()
        res.status(200).json(result)
    }else{
        res.status(403).json({message: "Eposta is not found!"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
}


module.exports = {
    createPasswordLink
}