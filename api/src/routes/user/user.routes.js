import { Router } from "express";
import { getUser } from '../../controllers/User/getUser'
import { createUser } from "../../controllers/User/createUser"
import { updateUser } from "../../controllers/User/updateUser";

const router = Router();

router.get('/:userId', getUser)
router.post('/add', createUser)
router.put('/update/:userId', updateUser)


export default router;

