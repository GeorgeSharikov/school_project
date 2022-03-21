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
            return next(ApiError.badRequest('Incorrect email or password'))
        }

        const isUserExist = await UserRepository.checkUserInDB(email, next)
        if(isUserExist){
            next(ApiError.badRequest('Человек с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await UserRepository.createUser({email, password: hashPassword, firstName, lastName}, next)

        return generateJWT(user.id, email, user.role)
    }
}

