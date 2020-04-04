const booksCtrl = {};

const Book = require('../models/Book')

booksCtrl.renderbookForm = (req,res) => {
    console.log(req.user.id)
    res.render('books/new-book');
};

booksCtrl.createNewBook = async(req,res) => {
    const {title, author, summarry, price, buyLink,idioma, portada } = req.body;
    const newBook = new Book({title, author, summarry, price, buyLink,idioma, portada});
    newBook.user = req.user.id;
    await newBook.save();
    req.flash('success_msg','Book Added Successfully.');
    res.redirect('/books')
};

booksCtrl.renderBooks = async (req,res) => {
    const books = await Book.find({user: req.user.id}).sort({createdAt: 'desc'});
    res.render('books/all-books', {books});
    //res.send('render books');
};

booksCtrl.renderEditBook = async (req,res) => {
    const book =await Book.findById(req.params.id);
    if(book.user != req.user.id){
        req.flash('error_msg', 'No estas autorizado.')
        return res.redirect('/books');
    }else{
        res.render('books/edit-book', {book});
    }
    
};

booksCtrl.updateBook = async(req,res) => {
    const {title, author, summarry, price, buyLink,idioma, portada} = req.body;
    await Book.findByIdAndUpdate(req.params.id,{title, author, summarry, price, buyLink,idioma, portada})
    req.flash('success_msg','Book Updated Successfully.');
    res.redirect('/books');
};

booksCtrl.deleteBook = async (req,res) => {
    console.log(req.params.id);
    const book = await Book.findById(req.params.id);
    if(book.user != req.user.id){
        req.flash('error_msg', 'No estas autorizado.')
        return res.redirect('/books');
    }else{
        await Book.findByIdAndDelete(req.params.id);
        req.flash('success_msg','Book Deleted Successfully.');
        res.redirect('/books')
    }

};

module.exports = booksCtrl;