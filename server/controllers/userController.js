import {UserService} from "../core/user/user-service.js";
import {generateJWT} from "../core/helpers/generateJWT.js";



class User{
    async registration(req, res, next){
        const userData = req.body
        const token = await UserService.registration(userData, next)
        if(token) {
            res.json({token})
        }

    }

    async logIn(req, res, next){
        const userData = req.body
        const token = await UserService.signIn(userData, next)
        if(token) {
            res.json({token})
        }
    }

    async auth(req, res, next){
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        res.json({token})
    }
}

export const UserController = new User()