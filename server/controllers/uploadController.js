import {uploadFilesService} from "../core/uploadFiles/upload-files-service.js";

class UploadFiles{
    async uploadImage(req, res, next){
        console.log(req.files)
        const {image} = req.files
        const response = uploadFilesService.uploadImage(image)
        res.send(response)
    }

}

export const UploadFilesController = new UploadFiles()