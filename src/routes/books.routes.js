const {Router} = require('express');
const router = Router();

const { renderbookForm, 
    createNewBook, 
    renderBooks, 
    renderEditBook, 
    updateBook, 
    deleteBook
} = require('../controllers/books.controller');

const {isAuthenticated} = require('../helpers/auth');



//New Book
router.get('/books/add', isAuthenticated, renderbookForm);

router.post('/books/new-book', isAuthenticated, createNewBook);

//Get All Book
router.get('/books', isAuthenticated, renderBooks);

//Edit Books
router.get('/books/edit/:id', isAuthenticated, renderEditBook);
router.put('/books/edit/:id', isAuthenticated, updateBook);

//Delete Books
router.delete('/books/delete/:id', isAuthenticated, deleteBook);


module.exports = router