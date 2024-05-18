import express from "express"
import dotenv from "dotenv"
import setUpRouter from "./src/routers/setUp.router.js"
import userRouter from "./src/routers/index.routes.js"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.use("/setup", setUpRouter)

app.use("/api", userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
