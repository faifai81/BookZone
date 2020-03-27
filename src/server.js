const exppress = require('express');
const path = require('path');

// Initializations

const app = exppress();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));

// Middlewares
app.use(exppress.urlencoded({extended:false}));

// Global Variables


// Routes
app.get('/', (req, res) =>{
    res.send('hello world');
})

// Static files
app.use(exppress.static(path.join(__dirname, 'public')));


module.exports = app;