import { UserinfoService } from '../core/userInfo/userInfo-service.js'
import {ApiError} from '../error/ApiError.js'


class UserInfo{
   async getPersonData(req, res, next){
       try{
        const id = req.user.id
        const userData = await UserinfoService.getPersonalData(id, next)
        res.json(userData)
       }catch(e){
           console.log('controller',e)
            next(ApiError.internal('Неизвестная ошибка'))
       }

   }
}

export const UserInfoController = new UserInfo()