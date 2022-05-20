import {JSONToHtml} from "../../core/helpers/covertJSONToHtml.js";
import {ArticleRepository} from "./article-repository.js";
import {ApiError} from "../../error/ApiError.js";

class ArticleServiceClass{
    async getFeed(){

    }
    async getOne(){

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
}

export const ArticleService = new ArticleServiceClass()