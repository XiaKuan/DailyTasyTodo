import * as koaRouter from 'koa-router'
import { version } from '../config'
const routeList = require('./routes')


const router: koaRouter = new koaRouter({
  "prefix": `/TodoList/${version}`
})

routeList.forEach((item) => {
  const { method, path, controller } = item
  router[method](path, controller)
})

export default router
