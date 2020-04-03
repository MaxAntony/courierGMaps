const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const hbs = require('express-handlebars');

//initializations
const app = express();
require('./config/database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultView: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
  }),
);
app.set('view engine', 'hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Global variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/auth.routes'));

// Static files
app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;
