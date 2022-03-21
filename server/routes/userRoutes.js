import {Router} from 'express'
import {UserController} from "../controllers/userController.js";

const router = new Router()

router.post('/registration', UserController.registration)

export const userRouter = router