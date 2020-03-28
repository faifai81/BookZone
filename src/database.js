
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/book-app'

mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
.then(db => console.log('database is connected.'))
.catch(err => console.log(err));
