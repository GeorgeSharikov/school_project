import express from 'express'
import env from 'dotenv'
env.config()
import {mainRouter} from "./routes/index.js";

const PORT = process.env.PORT || 4000

const app = express()

app.use('/api', mainRouter)

const start = async () => {
    try{
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()
