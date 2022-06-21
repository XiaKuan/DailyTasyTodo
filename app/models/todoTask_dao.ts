import { ModelCtor, Model } from "sequelize";
import { tasks } from "./todoTask_model";
import { todoTaskAttr } from "../types/todo_task";

export default class TodoTaskDao {
    private task_model: ModelCtor<Model>
    constructor() {
        this.task_model = tasks
    }


    /**
     * 根据任务ID查找任务
     *
     * @param {string} taskId
     * @return {*} 
     * @memberof TodoTaskDao
     */
    async findTaskById(taskId: string): Promise<Model> {

        return await this.task_model.findOne(
            {
                where: {
                    'id': taskId
                }
            }
        )
    }

    /**
     * 根据用户名称和任务名称查找任务
     *
     * @param {string} userId
     * @param {string} taskName
     * @return {*}  {Promise<Model>}
     * @memberof TodoTaskDao
     */
    async findTaskByUserIdAndName(userId: string, taskName: string): Promise<Model> {
        return await this.task_model.findOne({
            where: {
                task_name: taskName,
                user_id: userId
            }
        })
    }



    /**
     * 创建任务，返回任务ID
     *
     * @param {string} taskName
     * @param {string} taskType
     * @param {string} userId
     * @return {*}  {Promise<string>} 返回任务id
     * @memberof TodoTaskDao
     */
    async createTask(taskName: string, userId: string, taskType?: string): Promise<string> {
        const createTaskObject = {
            task_name: taskName,
            user_id: userId
        }
        if (taskType) { createTaskObject['type'] = taskType }
        const resp = await this.task_model.create(
            createTaskObject
        )
        if (resp) {
            const record = await this.task_model.findOne({
                where: {
                    task_name: taskName,
                    user_id: userId
                }
            })
            return record.getDataValue("id")
        }
    }


    /**
     * 更新数据
     *
     * @param {string} taskId
     * @param {string} [taskName]
     * @param {string} [tasktype]
     * @param {string} [taskStatus]
     * @param {string} [taskPoint]
     * @return {*} 
     * @memberof TodoTaskDao
     */
    async alterTask(taskId: string, taskName?: string, tasktype?: string, taskStatus?: string, taskPoint?: string) {
        const alterObject = {}
        if (taskName) { alterObject['task_name'] = taskName }
        if (tasktype) { alterObject['type'] = tasktype }
        if (taskStatus) { alterObject['status'] = taskStatus }
        if (taskPoint) { alterObject['point'] = taskPoint }

        const fetchRes = await this.task_model.update(
            alterObject,
            {
                where: {
                    id: taskId
                }
            }
        )
        if (fetchRes[0]) {
            return taskId
        }
    }


    /**
     *删除数据
     *
     * @param {string} taskId
     * @return {*} 
     * @memberof TodoTaskDao
     */
    async deleteTask(taskId: string) {
        const res = await this.task_model.destroy(
            {
                where: {
                    id: taskId
                }
            }
        )

        if (res) {
            return taskId
        }
    }
}

// (new TodoTaskDao()).findTaskById("1").then(v => console.log(v.getDataValue("task_name")))

// (new TodoTaskDao()).createTask("身份证去哪里", "211213").then(v => console.log(v))
// (new TodoTaskDao()).alterTask("2", "身份证去哪里", "yearly", "4", "20").then(v => console.log(v))
// (new TodoTaskDao()).deleteTask("2").then(v => console.log(v))