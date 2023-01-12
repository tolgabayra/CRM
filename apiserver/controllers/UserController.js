const User = require("../models/User")


const getUser = async (req, res) => {
    if(req.user.id === req.params.id){
        try {
            const user = await User.findById(req.params.id)
            const result ={
                _id: user._id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt
            }
            res.status(200).json(result)
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can not do this!")
    }
   
}

const showUser = async (req,res) => {
  
}


module.exports = {
    getUser
}



