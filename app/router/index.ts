import * as koaRouter from 'koa-router'
import { version } from '../config'


const router: koaRouter = new koaRouter({
  "prefix": `/TodoList/${version}`
})

const routeList = require('./routes')
routeList.forEach((item) => {
  const { method, path, controller } = item
  router[method](path, controller)
})

export default router
