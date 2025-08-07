import { Router } from "express"
import { validateToken } from "../middleware/validate-token.js"
import { getUserInfo } from "../controllers/users.controller.js"

const router = Router()

router.get("/", validateToken, getUserInfo)

export default router