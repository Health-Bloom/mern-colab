const express = require('express');
const app = express();
// const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const userAuth = require('./routes/UserAuthRoute');
const profilePage = require('./routes/profileRoute');
const lboardPage = require('./routes/lboardRoute');

mongoose.connect('mongodb://localhost:27017/mern-colab', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch(err => {
        console.log("MongoDB database connection error!!")
        console.log(err)
    })

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use(cors());

app.use('/', userAuth)
app.use('/', profilePage)
app.use('/', lboardPage)

const port = 8000;

app.listen(port, () => {
  console.log(`Backend Server listening at http://localhost:${port}`)
})