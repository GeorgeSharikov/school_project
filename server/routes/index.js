import {Router} from 'express'
import {userRouter} from "./userRoutes.js";

const router = new Router()

router.use('/user', userRouter)

export const mainRouter = router