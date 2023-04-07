import { Router } from "express";
import { searchBooks } from "../../controllers/Book/searchBook";
import { addBookRead } from "../../controllers/Book/addBookRead";
import { addBookToRead } from "../../controllers/Book/addBookToRead";
import { removeBookFromRead } from "../../controllers/Book/removeBookRead";
import { removeBookFromToRead } from "../../controllers/Book/removeBookToRead"

const router = Router();

router.get('/searchBook', searchBooks)
router.post('/booksRead/:userId', addBookRead)
router.delete('/booksRead/:userId/:bookId', removeBookFromRead)
router.post('/booksToRead/:userId', addBookToRead)
router.delete('/booksToRead/:userId/:bookId', removeBookFromToRead)


export default router;