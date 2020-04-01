const booksCtrl = {};

const Book = require('../models/Book')

booksCtrl.renderbookForm = (req,res) => {
    res.render('books/new-book');
};

booksCtrl.createNewBook = async(req,res) => {
    const {title, author, summarry, price, buyLink,idioma, portada } = req.body;
    const newBook = new Book({title, author, summarry, price, buyLink,idioma, portada});
    await newBook.save();
    console.log(newBook)
    res.send('new book')
};

booksCtrl.renderBooks = async (req,res) => {
    const books = await Book.find();
    res.render('books/all-books', {books});
    //res.send('render books');
};

booksCtrl.renderEditBook = (req,res) => {
    res.send('render Edit books');
};

booksCtrl.updateBook = (req,res) => {
    res.send('Update books');
};

booksCtrl.deleteBook = (req,res) => {
    res.send('Delete books');
};

module.exports = booksCtrl;