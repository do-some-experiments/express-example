const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const router = require('./src/routes');

const app = express();

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');
app.set(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', router);

module.exports = app;
