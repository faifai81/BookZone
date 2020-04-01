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
    },
    portada: {
        type:String
    },
    idioma: {
        type:String
    }

},{
    timestamps: true
},
{
    allowedProtoMethods: {
        trim: true
      }
});

module.exports = model('Book',BookSchema);