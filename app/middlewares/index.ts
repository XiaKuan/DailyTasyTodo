import * as koaBody from 'koa-bodyparser'

import router from '../router'
import response from './response'
import error from './error'


/*
 * 参数解析
 * body解析后存储在ctx.request.body中
 */
const mdKoaBody = koaBody({
  enableTypes: ['json', 'form', 'text', 'xml'],
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
  xmlLimit: '1mb',
  strict: true,
})

/*
 * 回复处理
 */
const mdResHandler = response()

/*
 * 错误处理
 */
const mdErrorHandler = error()

/*
 * 路由处理
 */

const mdRouter = router.routes()
const mdRouterAllowed = router.allowedMethods()

export default [mdKoaBody, mdRouter, mdResHandler, mdErrorHandler, mdRouterAllowed]
