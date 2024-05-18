import { Router } from "express";
import userRouter from './users.routes.js'

let router = Router()

router.use('/users', userRouter)

export default router