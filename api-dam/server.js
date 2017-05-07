let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let wagner = require('wagner-core');

//Models
require('./models/models')(wagner);
let user = require('./routes/user.route')(wagner);

let server = express();
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Routes
server.use('/users', user);

module.exports = server;