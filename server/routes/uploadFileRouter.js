import {Router} from "express";
import {CheckAuth} from "../middleware/CheckAuthMiddleware.js";
import {UploadFilesController} from "../controllers/uploadController.js";

const router = new Router()

router.post('/uploadImage', CheckAuth, UploadFilesController.uploadImage)

export const uploadFileRouter = router