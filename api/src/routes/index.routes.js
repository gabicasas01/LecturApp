import { Router } from "express";
import userRoutes from './user/user.routes'
import booksRoutes from './books/books.routes'
import recommendationRoutes from './recommendation/recommendation.routes'
import categoriesRoutes from './categories/categories.routes'

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello world!')
});
router.use('/user', userRoutes);
router.use('/books', booksRoutes);
router.use('/recommendation', recommendationRoutes)
router.use('/categories', categoriesRoutes)

export default router