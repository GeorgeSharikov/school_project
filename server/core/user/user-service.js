import {UserRepository} from "./user-repository.js";
import {ApiError} from "../../error/ApiError.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from 'dotenv'; env.config()

const generateJWT = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

export class UserService{
    static async registration(userData, next){
        const {email, password, firstName, lastName} = userData
        if(!password || !email){
            return next(ApiError.badRequest('Некорректны логин или пароль.'))
        }

        const isUserExist = await UserRepository.checkUserInDB(email, next)
        if(isUserExist){
            return next(ApiError.badRequest('Человек с таким email уже существует.'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await UserRepository.createUser({email, password: hashPassword, firstName, lastName}, next)

        return generateJWT(user.id, email, user.role)
    }

     static async signIn(userData, next){
        const {email, password} = userData

         if(!email || !password){
             return next(ApiError.badRequest('Некорректны логин или пароль.'))
         }

         const user = await UserRepository.getUser(email, next)
         if(!user){
             return next(ApiError.badRequest('Пользователя с таким email не найдено'))
         }

         const isPasswordEqual = bcrypt.compareSync(password, user.password)
         if(!isPasswordEqual){
             return next(ApiError.badRequest('Неправильный логин или пароль'))
         }
         return generateJWT(user.id, email, user.role)
    }
}

