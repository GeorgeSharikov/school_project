import {CheckAccess, CheckAuth} from "../middleware/CheckAuthMiddleware.js";
import {Router} from "express";
import {ArticleController} from "../controllers/articleController.js";

const router = new Router()

router.get('/getFeedArticles',ArticleController.getFeedArticles)
router.get('/getCountOfAllArticles', ArticleController.getCountOfAllArticles)
router.get('/getArticle', ArticleController.getArticle)

router.post('/createArticle', CheckAuth, ArticleController.createArticle)
// router.delete('/deleteArticle', CheckAuth, ArticleController)

router.post('/like',CheckAuth, ArticleController.like)
router.post('/dislike',CheckAuth, ArticleController.dislike)

router.post('/bookmark',CheckAuth, ArticleController.addBookmark)
router.get('/getBookmarks',CheckAuth, ArticleController.getBookmarks)
router.get('/getBookmarksTotalCount',CheckAuth, ArticleController.getBookmarksTotalCount)


router.get('/getFeedArticlesById', ArticleController.getFeedArticlesById)
router.get('/getDraftsArticles',CheckAuth, ArticleController.getDraftsArticles)
router.get('/getFeedArticlesByBookmarks',CheckAuth, ArticleController.getFeedArticlesByBookmarks)
router.get('/getModerationArticles',CheckAccess('ADMIN'), ArticleController.getModerationArticles)




export const articleRouter = router