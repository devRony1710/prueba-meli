import { Router } from "express"
import { validateToken } from "../middleware/validate-token.js"
import { getCountries } from "../controllers/getCountries.js"

const router = Router()

router.get("/", getCountries)

export default router