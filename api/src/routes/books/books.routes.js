import { Router } from "express";
import { searchBooks } from "../../controllers/Book/searchBook";
import { addBookRead } from "../../controllers/Book/addBookRead";
import { addBookToRead } from "../../controllers/Book/addBookToRead";

const router = Router();

router.get('/searchBook', searchBooks)
router.post('/booksRead/:userId', addBookRead)
router.post('/booksToRead/:userId', addBookToRead)



export default router;