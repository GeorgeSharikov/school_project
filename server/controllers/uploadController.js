import {uploadFilesService} from "../services/uploadFiles/upload-files-service.js";

class UploadFiles{
    async uploadImage(req, res, next){
        const {image} = req.files
        const response = uploadFilesService.uploadImage(image)
        res.send(response)
    }

}

export const UploadFilesController = new UploadFiles()