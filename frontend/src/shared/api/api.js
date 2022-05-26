import axios from 'axios'
import { getCookie } from '../helpers/getCookie';
import {BASE_SERVER_URL} from "../../constants/url.js";

const getAuthHeaders = () => ({
        'Authorization': `Bearer ${getCookie('token')}`
})

const instance = axios.create({
    baseURL: `${BASE_SERVER_URL}`,
});

class User{
    constructor(apiBase){
        this.apiBase = apiBase
    }
    async checkAuth(){
        try{
           const response = await instance.get(`${this.apiBase}/auth`, {
               headers: getAuthHeaders()
           })
           return response
        }catch(e){
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            } 
        }
    }

    async login(userData){
        try{
            const {email, password} = userData
            const res = await instance.post(`${this.apiBase}/login`, {email: email, password: password}, {
                headers: getAuthHeaders()
            })
            return res
        }catch(e){
            if(e.response){
                if(e.response.status === 404){
                    throw new Error(e?.response?.data?.message)
                }
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            }
        }
    }
}
export const UserApi = new User('user')
class UserInfo{
    constructor(apiBase){
        this.apiBase = apiBase
    }
    async getPersonalData(){
        try{
            instance.defaults.headers['Authorization'] = `Bearer ${getCookie('token')}`
            const response = await instance.get(`${this.apiBase}/getPersonalData`, {
                headers: getAuthHeaders()
            })
            return response
        }catch(e){
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            } 
        }
    }
    async getOtherPersonalData(id){
        try{
            const response = await instance.get(`${this.apiBase}/getOtherPersonalData?id=${id}`, {
                headers: getAuthHeaders()
            })
            return response
        }catch(e){
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            } 
        }
    }
}
export const UserInfoApi = new UserInfo('userInfo')

class Article{
    constructor(apiBase){
        this.apiBase = apiBase
    }

    async createArticle(data){
        try{
            const {article, isModerated:is_moderated, isDraft: is_draft} = data
            const response = await instance.post(`${this.apiBase}/createArticle`, {article, is_moderated, is_draft},{
                headers: getAuthHeaders()
            })
            return response
        }catch (e) {
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            }
        }
    }

    async getFeedArticlesByPortions(page){
        try{
            const response = await instance.get(`${this.apiBase}/getFeedArticles/?page=${page}`, {
                headers: getAuthHeaders()
            })
            return response
        }catch (e) {
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            }
        }
    }
    async getArticlesTotalCount({isModerated, id}){
        try{
            let queryStrID = id ? `profileId=${id}` : ''
            const response = await instance.get(`${this.apiBase}/getCountOfAllArticles/?isModerated=${isModerated}&${queryStrID}`, {
                headers: getAuthHeaders()
            })
            return response
        }catch (e) {
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Неизвестная ошибка. Попробуйте перезагрузить страницу.')
            }
        }
    }
}
export const ArticleApi = new Article('article')