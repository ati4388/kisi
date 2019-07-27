const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tckno: {type: String, unique: true, required: true},
    eposta: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;
