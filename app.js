const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');



require("dotenv").config()

const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:4200"]
};

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(bodyParser.json()); // parse requests of content-type - application/json 
app.use(bodyParser.urlencoded({
  extended: true
})); // parse requests of content-type - application/x-www-form-urlencoded

app.use('/', indexRouter);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({ id: 1, name: "admin" });
}

module.exports = app;