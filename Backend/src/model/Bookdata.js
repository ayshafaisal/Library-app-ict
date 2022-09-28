const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:user@cluster0.a35s6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    authorName : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating :Number,
    imageUrl : String
});

var Bookdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;