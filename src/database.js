
const mongoose = require('mongoose');

const {BOOKS_APP_MONGODB_HOST,BOOKS_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${BOOKS_APP_MONGODB_HOST}/${BOOKS_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
.then(db => console.log('database is connected.'))
.catch(err => console.log(err));
