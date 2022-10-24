const verifyValidate = (schema) => (req, res, next) => {
    const {value, error} = schema.validate(req.body)
  
    if(error){
      const errorMessage = error.details?.map(detail => detail.message).join(", ")
      res.status(400).json({error: errorMessage})
      return
    }
    else {
      next()
    }
  }
  
  module.exports = verifyValidate