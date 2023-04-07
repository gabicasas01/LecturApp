import { Router } from "express";
import userRoutes from './user/user.routes'
import booksRoutes from './books/books.routes'

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello world!')
});
router.use('/user', userRoutes);
router.use('/books', booksRoutes);

export default router