import axios from 'axios'
import { getCookie } from '../helpers/getCookie';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`
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

}
export const UserInfoApi = new UserInfo('userInfo')
