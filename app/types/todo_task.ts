export interface getTodoTaskReq {
    userId?: string,
    taskId: string
}

export interface getTodoTaskRes {
    taskId: string
    taskName: string
    taskStatus: string
    taskType: string
    taskPoint: string
}

export interface putTodoTaskReq {
    userId: string,
    taskName: string,
    taskType?: string
}

export interface putTodoTaskRes {
    taskId: string
}

export interface postTodoTaskReq {
    userId: string
    taskId: string
    alter: {
        taskName?: string
        taskType?: string
        taskStatus?: string
        taskPoint?: string
    }
}

export interface postTodoTaskRes {
    taskId: string
}

export interface deleteTodoTaskReq {
    userId: string
    taskId: string
}

export interface deleteTodoTaskRes {
    taskId: string
}

export interface todoTaskAttr {
    id: number,
    user_id: number,
    task_name: string,
    point: number,
    status: string,
    type: string,
    create_time: Date,
    update_time: Date
}