const koaBody = require('koa-bodyparser')

const router = require('../router')
const response = require('./response')
const error = require('./error')

/*
 * 参数解析
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
 * 错误处理
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

module.exports = [mdKoaBody, mdRouter, mdResHandler, mdErrorHandler, mdRouterAllowed]
