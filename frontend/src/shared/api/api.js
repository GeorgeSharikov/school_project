import axios from 'axios'
import { getCookie } from '../helpers/getCookie';


let token = getCookie('token')


const instance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

window.cookieStore.addEventListener('change', ({changed}) => {
    for (const {value} of changed) {
        instance.defaults.headers['Authorization'] = `Bearer ${value}`
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
