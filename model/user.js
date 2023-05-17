const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    name: {type:  String,require},
    email: {type: String,require, unique: true,lowerCase: true},
    phone_number: {type: String,require},
    department_id:{type:String,require},
    created_at: {type: Date,},
});
    
module.exports = mongoose.model("Users", userSchema);

