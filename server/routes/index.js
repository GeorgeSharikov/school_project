import {Router} from 'express'
import { userInfoRouter } from './userInfoRoutes.js';
import {userRouter} from "./userRoutes.js";
import {uploadFileRouter} from "./uploadFileRouter.js";

const router = new Router()

router.use('/user', userRouter)
router.use('/userInfo', userInfoRouter)
router.use('/static', uploadFileRouter)

export const mainRouter = router