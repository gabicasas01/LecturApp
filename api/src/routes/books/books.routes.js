import { Router } from "express";
import { searchBooks } from "../../controllers/Book/searchBook";
import { addBookToRead } from "../../controllers/Book/addBook";

const router = Router();

router.get('/searchBook', searchBooks)
router.post('/booksRead/:userId', addBookToRead)


export default router;