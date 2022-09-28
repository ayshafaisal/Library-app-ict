const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://newuser:newuser@maincluster.er5a2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var LoginSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    address: String
});

var LoginData = mongoose.model('logindata', LoginSchema);                        //UserData is the model and NewBookData is the schema

module.exports = LoginData;