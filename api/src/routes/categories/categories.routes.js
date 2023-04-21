import { Router } from "express";
import { getCategories } from '../../controllers/Categories/getCategories'


const router = Router();

router.get('/getCategories', getCategories)

export default router;