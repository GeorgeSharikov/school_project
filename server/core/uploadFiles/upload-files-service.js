import {v4 as uuidv4} from "uuid";
import env from 'dotenv'
import path from 'path'
env.config()

export class uploadFilesService {
    static uploadImage(img){
        try{
            const fileName = `${uuidv4()}.jpg`
            img.mv(path.resolve(path.dirname(''), 'Static/images', fileName))
            return {
                success: 1,
                file: {
                    url: `${process.env.SERVER_URL}/api/static/images/${fileName}`
                }
            }
        }catch (e) {
            return {
                success: 0
            }
        }

    }
}