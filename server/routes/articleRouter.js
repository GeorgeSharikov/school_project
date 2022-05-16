import {CheckAuth} from "../middleware/CheckAuthMiddleware.js";
import {Router} from "express";
import {ArticleController} from "../controllers/articleController.js";

const router = new Router()

router.get('/getFeedArticles', CheckAuth, ArticleController.getFeedArticles)
router.get('/getArticle', CheckAuth, ArticleController.getArticle)
router.post('/createArticle', CheckAuth, ArticleController.createArticle)

export const articleRouter = router