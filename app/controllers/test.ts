import * as Koa from 'koa'

const list: Koa.Middleware = async (ctx) => {
  ctx.body = '返回结果'
  // console.log(ctx)
}

export { list }
