import TodoTaskDao from "../models/todoTask_dao"
import {
    getTodoTaskReq,
    getTodoTaskRes,
    putTodoTaskReq,
    putTodoTaskRes,
    postTodoTaskReq,
    postTodoTaskRes,
    deleteTodoTaskReq,
    deleteTodoTaskRes,
    todoTaskAttr
} from "../types/todo_task"

export class TodoData {
    private task_dao
    constructor() {
        this.task_dao = new TodoTaskDao()
    }

    async getTask(params: getTodoTaskReq): Promise<getTodoTaskRes> {
        const resp = await this.task_dao.findTaskById(params.taskId)
        return {
            taskId: resp.taskId,
            taskName: resp.taskName,
            taskStatus: resp.taskStatus,
            taskType: resp.taskType,
            taskPoint: resp.taskPoint
        }
    }

    async putTask(params: putTodoTaskReq): Promise<putTodoTaskRes> {

    }
}
