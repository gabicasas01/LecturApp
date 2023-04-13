import { Router } from "express";
import { getRecommendation } from "../../controllers/Recommendation/getRecommendations"

const router = Router();

router.post('/', getRecommendation)


export default router;
