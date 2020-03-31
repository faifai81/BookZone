const booksCtrl = {};

booksCtrl.renderbookForm = (req,res) => {
    res.render('books/new-book');
};

booksCtrl.createNewBook = (req,res) => {
    console.log(req.body)
    res.send('new book')
};

booksCtrl.renderBooks = (req,res) => {
    res.send('render books');
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