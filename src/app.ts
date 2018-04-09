import * as Koa from 'koa'
import router from './routers'

const app = new Koa()
app.use(router.routes())

export default app