import express from "express"
import dotenv from "dotenv"
import setUpRouter from "./src/routers/setUp.router.js"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.use("/setup", setUpRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT }`)
})
