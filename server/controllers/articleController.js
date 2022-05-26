import {ArticleService} from "../services/article/article-service.js";
import {ApiError} from "../error/ApiError.js";

class Article{
    async getFeedArticles(req, res, next){
        try{
            const page = req.query.page
            const articles = await ArticleService.getFeed(page)
            res.send(articles)
        }catch (e) {
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
    async getArticle(req, res, next){
        const article = await ArticleService.getOne()
        res.send(article)
    }
    async createArticle(req, res, next){
        const articleData = req.body
        const userId = req.user.id
        const article = await ArticleService.create(articleData, userId, next)
        res.send(article)
    }
    async getCountOfAllArticles(req, res, next){
        const count = await ArticleService.countArticles(req.query, next)
        res.send({totalCount: count})
    }
}

export const ArticleController = new Article()