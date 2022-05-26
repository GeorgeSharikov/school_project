import {CheckAuth} from "../middleware/CheckAuthMiddleware.js";
import {Router} from "express";
import {ArticleController} from "../controllers/articleController.js";

const router = new Router()

router.get('/getFeedArticles',ArticleController.getFeedArticles)
router.get('/getCountOfAllArticles', ArticleController.getCountOfAllArticles)
router.get('/getArticle', ArticleController.getArticle)
router.post('/createArticle', CheckAuth, ArticleController.createArticle)

export const articleRouter = router