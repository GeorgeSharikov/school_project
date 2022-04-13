import {Router} from 'express'
import {CheckAuth} from "../middleware/CheckAuthMiddleware.js";
import { UserInfoController } from '../controllers/userInfoController.js';

const router = new Router()

router.get('/getPersonalData', CheckAuth, UserInfoController.getPersonData)

export const userInfoRouter = router