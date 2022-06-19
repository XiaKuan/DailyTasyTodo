import * as Koa from 'koa'
import { TodoData } from '../data/todo_data'

const TodoDataInst = new TodoData()


const createTask: Koa.Middleware = async (ctx, next) => {
  const curTime = new Date()
  ctx.body = '返回结果'
  console.log(`${curTime}: 创建任务`)
  // console.log(ctx)
  await next()
}

const updateTask: Koa.Middleware = async (ctx, next) => {
  const curTime = new Date()
  ctx.body = '返回结果'
  console.log(`${curTime}: 更新任务`)
  await next()
  // console.log(ctx)
}

const deleteTask: Koa.Middleware = async (ctx, next) => {
  const curTime = new Date()
  ctx.body = '返回结果'
  console.log(`${curTime}: 删除任务`)
  await next()
  // console.log(ctx)
}

const getTask: Koa.Middleware = async (ctx, next) => {
  const curTime = new Date()
  const taskId: string = ctx.request.body

  // 根据任务ID获取任务
  console.log(`${curTime}: 获取任务`)
  await next()
}

export { createTask, updateTask, deleteTask, getTask }
