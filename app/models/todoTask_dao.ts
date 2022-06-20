import { ModelCtor, Model } from "sequelize/types";
import { tasks } from "./todoTask_model";
import { todoTaskAttr } from "../types/todo_task";

export default class TodoTaskDao {
    private task_model: ModelCtor<Model>
    constructor() {
        this.task_model = tasks
    }

    async findTaskById(taskId: string) {

        return await this.task_model.findOne(
            {
                where: {
                    'id': taskId
                }
            }
        )
    }

    async createTask
}