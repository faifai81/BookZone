//const Handlebars = require('handlebars');
const exppress = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const morgan = require('morgan');

// Initializations

const app = exppress();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:  path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    //handlebars : allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(exppress.urlencoded({extended:false}));

// Global Variables


// Routes
/*app.get('/', (req, res) =>{
    res.render('index');
})*/

app.use(require('./routes/index.routes'));
app.use(require('./routes/books.routes'));

// Static files
app.use(exppress.static(path.join(__dirname, 'public')));


module.exports = app;