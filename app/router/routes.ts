import {
  list, createTask, updateTask, deleteTask, getTask
} from "../controllers"
import { route } from '../types/route'

export const routes: route[] = [
  {
    // todo任务
    method: 'get',
    path: '/todoTask',
    controller: getTask,
  },
  {
    method: "post",
    path: "/todoTask",
    controller: updateTask,
  },
  {
    method: "put",
    path: "/todoTask",
    controller: createTask,
  },
  {
    method: "delete",
    path: "/todoTask",
    controller: deleteTask,
  },
  {
    // 测试
    method: 'post',
    path: '/a',
    controller: list,
  },
  {
    // 测试
    method: 'get',
    path: '/a',
    controller: list,
  },
]

