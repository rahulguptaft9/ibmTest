let express = require("express");
var cors = require('cors');
const bodyParser= require('body-parser');
const router = require('./routes/routing');
const myerrorlogger = require('./utilities/errorLogger');
const myRequestLogger = require('./utilities/requestLogger');


let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
app.use(myRequestLogger);
app.use('/',router);
app.use(myerrorlogger);
app.listen(3000);
console.log('server started');

module.exports= app;