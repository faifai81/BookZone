const {Schema,model } = require('mongoose');

const BookSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String
    },
    summarry:{
        type: String  
    },
    price:{
        type:String
    },
    buyLink: {
        type: String,
        required: true
    }

},{
    timestamps: true
});

module.exports = model('Book',BookSchema);