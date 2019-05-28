const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true });
require('./server/config/mongoose');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen('8000', function(){
    console.log('8000')
})