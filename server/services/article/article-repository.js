import {ArticleModel, UserModel} from "../../db/models/models.js";
import {ApiError} from "../../error/ApiError.js";
import {Op} from "sequelize";

class Article{
    async getFeedArticlesByPage(page){
        try{
            const amount = page*20
            const articles = await ArticleModel.findAll({
                where: {
                    is_moderated: true,
                },
                attributes: ['id','title','title_paragraph','title_image','content','like_count','userId', 'first_name', 'last_name', 'createdAt'],
                order: [['updatedAt', 'DESC']],
                offset: amount-20,
                limit: amount
            })
            return articles

        }catch (e) {
            console.log(e, 'rep')
            throw new Error(e)
        }
    }

    async getOne(){

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
}

export const ArticleRepository = new Article()