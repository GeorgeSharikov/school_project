import axios from 'axios'
import { getCookie } from '../helpers/getCookie';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`
    }
});

class User{
    async checkAuth(){
        try{
           const response = await instance.get('/user/auth')
           return response
        }catch(e){
            if(e.response){
                if(e.response.status !== 401){
                    throw new Error(e?.response?.statusText)
                }
                throw new Error(e?.response?.data?.message)
            }else{
                throw new Error('Не известная ошибка')
            } 
        }
    }

    async login(userData){
        try{
            const {email, password} = userData
            return await instance.post('/user/login', {email: email, password: password})
        }catch(e){
            if(e.response){
                if(e.response.status === 404){
                    throw new Error(e?.response?.data?.message)
                }
            }else{
                throw new Error('Не известная ошибка.')
            }
        }
    }
}
export const UserApi = new User()


