import { Router } from "express";
import {getCheckoutInfo} from "../controllers/checkout.controller.js"
import { validateToken } from "../middleware/validate-token.js"

const router = Router()

router.get("/", validateToken, getCheckoutInfo)

router.post("/next-step", validateToken, nextStep)

export default router
