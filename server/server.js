import express from 'express'
import env from 'dotenv'
env.config()
import {mainRouter} from "./routes/index.js";
import cors from 'cors'
import fileupload from 'express-fileupload'
import path from 'path'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(fileupload({}))
app.use(express.static(path.resolve(path.dirname(''), 'Static')))
app.use(cors())
app.use('/api', mainRouter)

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()
