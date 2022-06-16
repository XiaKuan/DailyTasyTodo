import * as Koa from "koa"
import * as compose from "koa-compose"

import MD from './middlewares'
import config from './config'
import utils from './common/utils'

const app = new Koa()

const PORT: number = 8082
const HOST: string = '0.0.0.0'

/* 
 * 加载配置和工具
 */
app.context.config = config
app.context.utils = utils

app.use(compose(MD))

app.on('error', (err, ctx) => {
    if (ctx) {
        ctx.body = {
            code: 9999,
            message: `程序运行时报错：${err.message}`,
        }
    }
})

app.listen(PORT, HOST, () => {
    console.log(`API server listening on ${PORT}:${HOST}`)
})
