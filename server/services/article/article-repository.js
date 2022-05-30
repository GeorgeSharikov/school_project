import {ArticleModel, UserModel} from "../../db/models/models.js";
import {ApiError} from "../../error/ApiError.js";

class Article{
    async getFeedArticlesByPage(page){
        try{
            const amount = page*5
            const articles = await ArticleModel.findAll({
                where: {
                    is_moderated: true,
                },
                attributes: ['id','title','title_paragraph','title_image','content','like_count','userId', 'first_name', 'last_name', 'createdAt', 'likes', 'dislikes'],
                order: [['createdAt', 'DESC']],
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
                const {content, title, userId, first_name, last_name, like_count, createdAt, likes, dislikes} = article
                return {content, title, userId, first_name, last_name, like_count, createdAt, likes, dislikes}
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

    async like(articleId, userId, next){
        userId = String(userId)
        try{
            let {likes, dislikes, like_count: likeCount, is_moderated, is_draft} = await ArticleModel.findOne({where: {id: articleId}})
            if(!is_moderated || is_draft){
                return next(ApiError.internal('Статьи не найдено'))
            }
            console.log(likes)
            likes = likes.split(" ")
            console.log(likes)
            dislikes = dislikes.split(" ")

            if(!likes.includes(userId) &&!dislikes.includes(userId)){
                likeCount+=1
                likes.push(userId)
                likes = likes.join(" ")

                await ArticleModel.update(
                    {like_count: likeCount, likes: likes},
                    {where: {id: articleId}}
                )
                return likeCount
            }else if(dislikes.includes(userId)){
                likeCount+=2
                dislikes = dislikes.filter(el => el !== userId)
                dislikes = dislikes.join(" ")
                likes.push(userId)
                likes = likes.join(" ")
                await ArticleModel.update(
                    {like_count: likeCount, likes: likes, dislikes: dislikes},
                    {where: {id: articleId}}
                )
                return likeCount
            } else{
                likeCount-=1
                likes = likes.filter(el => el !== userId)
                likes = likes.join(" ")
                await ArticleModel.update(
                    {like_count: likeCount, likes: likes},
                    {where: {id: articleId}}
                )
                return likeCount
            }
        }catch (e) {
            console.log('error rep', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }

    async dislike(articleId, userId, next){
        userId = String(userId)
        try{
            let {likes, dislikes, like_count: likeCount, is_moderated, is_draft} = await ArticleModel.findOne({where: {id: articleId}})
            if(!is_moderated || is_draft){
                return next(ApiError.internal('Статьи не найдено'))
            }
            likes = likes.split(" ")
            dislikes = dislikes.split(" ")

            if(!dislikes.includes(userId) && !likes.includes(userId)){
                likeCount-=1
                dislikes.push(userId)
                dislikes = dislikes.join(" ")
                await ArticleModel.update(
                    {like_count: likeCount, dislikes: dislikes},
                    {where: {id: articleId}}
                )
                return likeCount
            }else if(likes.includes(userId)){
                likeCount-=2
                likes = likes.filter(el => el !== userId)
                likes = likes.join(" ")
                dislikes.push(userId)
                dislikes = dislikes.join(" ")
                await ArticleModel.update(
                    {like_count: likeCount, likes: likes, dislikes: dislikes},
                    {where: {id: articleId}}
                )
                return likeCount
            } else{
                likeCount+=1
                dislikes = dislikes.filter(el => el !== userId)
                dislikes = dislikes.join(" ")
                await ArticleModel.update(
                    {like_count: likeCount, dislikes: dislikes},
                    {where: {id: articleId}}
                )
                return likeCount
            }
        }catch (e) {
            console.log('error repasd', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
    async addBookmark(articleId, userId, next){
        try{
            const article = await ArticleModel.findOne({where: {id: articleId}})
            if(!article){
                return next(ApiError.internal('Такая статья не существует'))
            }
            const {is_moderated, is_draft} = article
            let {bookmarks} = await UserModel.findOne({where: {id: userId}})

            if(!is_moderated || is_draft){
                return next(ApiError.internal('Статьи не найдено'))
            }
            if(bookmarks === null){
                bookmarks = ''
            }
            bookmarks = bookmarks.split(" ")
            if(!bookmarks.includes(articleId)){
                bookmarks.push(articleId)
            }else{
                bookmarks = bookmarks.filter(el => el !== articleId)
            }
            bookmarks = bookmarks.join(" ")
            await UserModel.update(
                {bookmarks: bookmarks},
                {where: {id: userId}}
            )
            return bookmarks.split(" ")
        }catch (e) {
            console.log('error repasd', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }

    async getBookmarks( userId, next){
        try{
            let {bookmarks} = await UserModel.findOne({where: {id: userId}})
            if(bookmarks === null){
                bookmarks = ''
            }
            return bookmarks.split(" ")
        }catch (e) {
            console.log('error repasd', e)
            next(ApiError.internal('Неизвестная ошибка'))
        }
    }
}

export const ArticleRepository = new Article()