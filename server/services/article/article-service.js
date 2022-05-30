import {JSONToHtml} from "../../core/helpers/covertJSONToHtml.js";
import {ArticleRepository} from "./article-repository.js";
import {ApiError} from "../../error/ApiError.js";

class ArticleServiceClass{
    async getFeed(page){
        try{
            return await ArticleRepository.getFeedArticlesByPage(page)
        }catch (e) {
            throw new Error(e)
        }
    }
    async getOne(articleId, next){
        return await ArticleRepository.getOne(articleId, next)
    }
    async create(articleData, userId, next){
        try{
            const {article, is_moderated, is_draft} = articleData
            const {title, data} = article
            const {articleHTML, title_paragraph, title_image, blocksToFeed} = JSONToHtml.convert(article)
            const result = await ArticleRepository.createOne(userId, {title, data, is_moderated, is_draft, articleHTML, title_paragraph, title_image, blocksToFeed}, next)
            return result
        }catch (e) {
            console.log('error ser', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
    async countArticles(conditions, next){
        const conditionalObj = {}
        if(conditions.isModerated){
            conditionalObj['is_moderated'] = Boolean(conditions.isModerated)
        }
        if(conditions.profileId){
            conditionalObj['userId'] = conditions.profileId
        }
        try{
            return await ArticleRepository.count(conditionalObj, next)
        }catch (e) {
            console.log('error ser', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }

    async like(articleId, userId, next){
        try{
            return await ArticleRepository.like(articleId, userId, next)
        }catch (e) {
            console.log('error ser', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }

    async dislike(articleId, userId, next){
        try{
            return await ArticleRepository.dislike(articleId, userId, next)
        }catch (e) {

            console.log('error ser', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }

    async addBookmark(articleId, userId, next){
        try{
            return await ArticleRepository.addBookmark(articleId, userId, next)
        }catch (e) {
            console.log('error ser', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }

    async getBookmarks(userId, next){
        try{
            return await ArticleRepository.getBookmarks(userId, next)
        }catch (e) {
            console.log('error ser', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
}

export const ArticleService = new ArticleServiceClass()