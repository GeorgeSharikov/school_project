import axios from 'axios'
import { getCookie } from '../helpers/getCookie';
import {BASE_SERVER_URL} from "../../constants/url.js";

let token = getCookie('token')

const instance = axios.create({
    baseURL: `${BASE_SERVER_URL}`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

window.cookieStore.addEventListener('change', ({changed}) => {
    for (const {name, value} of changed) {
        if(name === 'token'){
            instance.defaults.headers['Authorization'] = `Bearer ${value}`
        }
    }
});

class User{
    constructor(apiBase){
        this.apiBase = apiBase
    }
    async checkAuth(){
        try{
           const response = await instance.get(`${this.apiBase}/auth`)
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
            return await instance.post(`${this.apiBase}/login`, {email: email, password: password})
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
            const response = await instance.get(`${this.apiBase}/getPersonalData`)
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
            const response = await instance.get(`${this.apiBase}/getOtherPersonalData?id=${id}`)
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
            const response = await instance.post(`${this.apiBase}/createArticle`, {article, is_moderated, is_draft})
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
            const response = await instance.get(`${this.apiBase}/getFeedArticles/?page=${page}`)
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