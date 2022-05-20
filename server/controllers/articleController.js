import {ArticleService} from "../services/article/article-service.js";

class Article{
    async getFeedArticles(req, res, next){
        const articles = await ArticleService.getFeed()
        res.send(articles)
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
}

export const ArticleController = new Article()