import {Router} from 'express'
import {UserController} from "../controllers/userController.js";
import {CheckAuth} from "../middleware/CheckAuthMiddleware.js";

const router = new Router()

router.post('/registration', UserController.registration)
router.post('/login', UserController.logIn)
router.get('/auth', CheckAuth, UserController.auth)

export const userRouter = router