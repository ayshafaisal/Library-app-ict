const express = require('express');
const BookData = require('./src/model/Bookdata');
const LoginData = require('./src/model/LoginData');
const mongoose=require('mongoose')
const cors = require('cors');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
var username = 'admin';
var password = '12345';


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}


app.post('/insert', verifyToken, function (req, res) {

  console.log(req.body);

  var book = {
    bookId: req.body.book.bookId,
    bookName: req.body.book.bookName,
    authorName: req.body.book.authorName,
    releaseDate: req.body.book.releaseDate,
    description: req.body.book.description,
    price: req.body.book.price,
    starRating: req.body.book.starRating,
    imageUrl: req.body.book.imageUrl,
  }
  var book = new BookData(book);
  book.save();
});
app.get('/books', function (req, res) {

  BookData.find()
    .then(function (books) {
      res.send(books);
    });
});
app.get('/:id', (req, res) => {

  const id = req.params.id;
  BookData.findOne({ "_id": id })
    .then((book) => {
      res.send(book);
    });
})

app.post('/login', (req, res) => {
  let userData = req.body


  if (!username) {
    res.status(401).send('Invalid Username')
  } else
    if (password !== userData.password) {
      res.status(401).send('Invalid Password')
    } else {
      let payload = { subject: username + password }
      let token = jwt.sign(payload, 'secretKey')
      console.log(token);
      res.status(200).send({ token })
    }

})

app.put('/update', (req, res) => {
  console.log(req.body)
  id = req.body._id,
    bookId = req.body.bookId,
    bookName = req.body.bookName,
    authorName = req.body.authorName,
    releaseDate = req.body.releaseDate,
    description = req.body.description,
    price = req.body.price,
    starRating = req.body.starRating,
    imageUrl = req.body.imageUrl
  BookData.findByIdAndUpdate({ "_id": id },
    {
      $set: {
        "bookId": bookId,
        "bookName": bookName,
        "authorName": authorName,
        "releaseDate": releaseDate,
        "description": description,
        "price": price,
        "starRating": starRating,
        "imageUrl": imageUrl
      }
    })
    .then(function () {
      res.send();
    })
})

app.delete('/remove/:id', (req, res) => {

  var id = req.params.id;
  BookData.findByIdAndDelete({ "_id": id })
    .then(() => {
      console.log('success')
      res.send();
    })
})

app.post('/register', (req, res) => {
  var usertemp=req.body.user;
  delete usertemp._id;
  var user = LoginData(usertemp);
  user.save();
  res.send({ "message": "success" });
});

app.post('/userlogin', (req, res) => {
  var user = req.body.user;
  LoginData.find({ email: user.email }).then(data => {
    if (data[0]) {
      if (data[0].password == user.password) {
        res.send({ "message": "success" });
      }
      else {
        res.send({ "message": "failure" });
      }
    }
    else {
      res.send({ "message": "failure" });
    }
  })
});

app.listen(process.env.PORT || '3000', function () {
  console.log('listening to port 3000');
});

