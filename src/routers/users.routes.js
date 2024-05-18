import { Router } from "express";
import { getUsers, createUser, deleteUser, userUpdate } from "../controllers/users.controller.js"
import { userById } from "../controllers/users.controller.js"

let router = Router()

router.get('/', getUsers)
router.get('/:id', userById)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', userUpdate)



export default router