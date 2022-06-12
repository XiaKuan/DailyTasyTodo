const koaRouter = require('koa-router')

const router = new koaRouter()

// router.get('/a', (ctx) => {
//   ctx.body = 'a'
// })

// router.get('/b', (ctx) => {
//   ctx.body = 'b'
// })

// router.get('/c', (ctx) => {
//   ctx.body = 'c'
// })

const routeList = require('./routes')
routeList.forEach((item) => {
  const { method, path, controller } = item
  router[method](path, controller)
})

module.exports = router
