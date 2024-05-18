import {
    Router
} from "express"

import {
    createPost
} from "../controllers/posts.controller.js"

const router = Router()

router.get("/", createPost)

export default router
