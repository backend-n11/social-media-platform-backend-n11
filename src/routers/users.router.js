import { Router } from "express";
import { userController } from "../controllers/users.controller.js";


let router = Router()

router.get('/', userController)
router.get('/:id', userById)


export default router