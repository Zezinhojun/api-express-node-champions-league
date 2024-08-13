import express, { json } from "express"
import { router } from "./routes"
import cors from 'cors'


export const createApp = () => {
    const app = express()
    app.use(json())
    app.use(cors())
    // app.use(cors((corOptions))
    app.use("/api", router)

    // const corsOptions = {
    //     origin: ["https://foo.sistem.com"],
    //     methods: ["GET", "UPDATE"]
    // }

    return app
} 
