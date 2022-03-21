import {UserService} from "../core/user/user-service.js";

class User{
    async registration(req, res, next){
        const userData = req.body
        const token = await UserService.registration(userData, next)
        console.log(token)
        res.json({token})
    }
}

export const UserController = new User()