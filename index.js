const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//setupt express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://Test:REST@cluster0-063di.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//initialize routes
app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message });
});


// listen to port 4000

app.listen(4000,function(){
    console.log('Listening to port 4000');


});