const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')

require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// Http Logger
app.use(morgan('dev'));

// Connect db
const db = require('./app/config/db');
db.connect();

// Template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'resources', 'views'))

// Route init
const route = require('./routes/index')
route(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
} )
