
import express from "express"
import {authMiddleware} from "../middlewares/auth-middleware"
import {UserController} from "../controllers/user-controller"

export const protectedRouter = express.Router()
protectedRouter.use(authMiddleware)

protectedRouter.delete("/api/logout", UserController.login)