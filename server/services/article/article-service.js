import {JSONToHtml} from "../../core/helpers/covertJSONToHtml.js";
import {ArticleRepository} from "./article-repository.js";

class ArticleServiceClass{
    async getFeed(){

    }
    async getOne(){

    }
    async create(articleData, userId, next){
        const {article, is_moderate, is_draft} = articleData
        const {title, data} = article
        const articleHTML = JSONToHtml.convert(article)
        const result = await ArticleRepository.createOne(userId, {title, data, is_moderate, is_draft, articleHTML})
    }
}

export const ArticleService = new ArticleServiceClass()