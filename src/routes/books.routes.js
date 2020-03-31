const {Router} = require('express')
const router = Router()

const { renderbookForm, 
    createNewBook, 
    renderBooks, 
    renderEditBook, 
    updateBook, 
    deleteBook
} = require('../controllers/books.controller');


//New Book
router.get('/books/add', renderbookForm);

router.post('/books/new-book', createNewBook);

//Get All Book
router.get('/books', renderBooks);

//Edit Books
router.get('/books/edit/:id', renderEditBook);
router.put('/books/edit/:id', updateBook);

//Delete Books
router.delete('/books/edit/:id', deleteBook);


module.exports = router