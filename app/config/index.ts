// const base = require('./base')
// const dev = require('./dev')
// const pre = require('./pre')
// const pro = require('./pro')

// const env = process.env.NODE_ENV || 'dev'
export const version = "v1.0.0"
export const dbConfig = {
  dbName: 'todo_tasks',
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456'
}
export default {
  environment: 'dev',
  dbConfig,
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}
