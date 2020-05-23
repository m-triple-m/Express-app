const mongoose = require('../connection');
const Schema = mongoose.Schema;

const userSchema = Schema({

    name : String,
    username : String,
    contact : String,
    age : Number
})

const model = mongoose.model('Users', userSchema);

module.exports = model;