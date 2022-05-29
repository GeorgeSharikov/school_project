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
        const id = req.query.id
        const article = await ArticleService.getOne(id, next)
        if(article){
            res.send(article)
        }
    }
    async createArticle(req, res, next){
        try{
            const articleData = req.body
            const userId = req.user.id
            const article = await ArticleService.create(articleData, userId, next)
            res.send(article)
        }catch (e) {
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
    async getCountOfAllArticles(req, res, next){
        try{
            const count = await ArticleService.countArticles(req.query, next)
            res.send({totalCount: count})
        }catch (e) {
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
}

export const ArticleController = new Article()