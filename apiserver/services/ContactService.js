const BaseService = require("./BaseService")
const BaseModel = require("../models/Contact")

class ContactService extends BaseService {
    constructor(){
        super(BaseModel)
    }

    list(where){
        return BaseModel.findOne
    }
}