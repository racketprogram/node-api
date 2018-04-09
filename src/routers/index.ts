import * as Router from 'koa-router'
import container from '../inversify.config'
import { TYPES } from "../types"
import { UserControllerInterface } from "../controllers_interfaces/UserControllerInterface"

const userController = container.get<UserControllerInterface>(TYPES.UserController)
const router = new Router()
router.get('/user', async (ctx: any, next: any) => await userController.get(ctx, next))

export default router
