import {ArticleModel} from "../../db/models/models.js";
import {ApiError} from "../../error/ApiError.js";

class Article{
    async getFirstTwenty(){

    }
    async getOne(){

    }
    async createOne(id, article, next){
        try{

            const {title, data, is_moderated, is_draft, articleHTML, title_paragraph, title_image, blocksToFeed} = article
            console.log(articleHTML)
            const result = await ArticleModel.create({
                title,
                title_paragraph,
                title_image,
                content: articleHTML,
                like_count: 0,
                userId: id,
                is_moderated,
                is_draft,
                json_article_data: JSON.stringify(data),
                show_blocks_id: blocksToFeed
            })
            return result
        }catch (e) {
            console.log('error rep', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }

    }
}

export const ArticleRepository = new Article()