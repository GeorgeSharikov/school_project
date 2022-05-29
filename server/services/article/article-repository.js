import {ArticleModel, UserModel} from "../../db/models/models.js";
import {ApiError} from "../../error/ApiError.js";
import {Error, Op} from "sequelize";

class Article{
    async getFeedArticlesByPage(page){
        try{
            const amount = page*5
            const articles = await ArticleModel.findAll({
                where: {
                    is_moderated: true,
                },
                attributes: ['id','title','title_paragraph','title_image','content','like_count','userId', 'first_name', 'last_name', 'createdAt'],
                order: [['updatedAt', 'DESC']],
                offset: amount-5,
                limit: 5
            })
            return articles

        }catch (e) {
            console.log(e, 'rep')
            throw new Error(e)
        }
    }

    async getOne(articleId, next){
        try{
            const article = await ArticleModel.findOne({
                where: {
                    id: articleId
                }
            })
            if(!article){
                next(ApiError.badRequest('Статья  не найдена'))
            }else{
                const {content, title, userId, first_name, last_name, like_count, createdAt} = article
                return {content, title, userId, first_name, last_name, like_count, createdAt}
            }
        }catch (e) {
            next(ApiError.badRequest('Неизвестная ошибка.'))
        }
    }

    async createOne(id, article, next){
        try{
            const user = await UserModel.findOne({where: {id: id}})
            const {title, data, is_moderated, is_draft, articleHTML, title_paragraph, title_image, blocksToFeed} = article
            const result = await ArticleModel.create({
                title,
                title_paragraph,
                title_image,
                content: articleHTML,
                like_count: 0,
                userId: id,
                is_moderated: true,
                is_draft,
                json_article_data: JSON.stringify(data),
                show_blocks_id: blocksToFeed,
                last_name: user.lastName,
                first_name: user.firstName,

            })
            return result
        }catch (e) {
            console.log('error rep', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
    async count(condition, next){
        try{
            return await ArticleModel.count({
                where: condition
            })
        }catch (e) {
            console.log('error rep', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
}

export const ArticleRepository = new Article()