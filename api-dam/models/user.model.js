let mongoose = require('mongoose');

let UserSchema = {
    name: {type: String, required:true},
    email: {type:String, required:true},
    password: {type: String, required: true},
    user: {type: String, required: true},
    date: {type: String, required: true},
    photo: {type: String, required:true}
};

module.exports = new mongoose.Schema(UserSchema);
