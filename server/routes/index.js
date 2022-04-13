import {Router} from 'express'
import { userInfoRouter } from './userInfoRoutes.js';
import {userRouter} from "./userRoutes.js";

const router = new Router()

router.use('/user', userRouter)
router.use('/userInfo', userInfoRouter)

export const mainRouter = router