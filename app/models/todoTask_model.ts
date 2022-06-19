import { dbConfig } from '../config'
import { Sequelize, DataType, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    dbConfig.dbName,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: 'mysql',
        port: dbConfig.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 30000
        }
    }
)

export const tasks = sequelize.define("tasks", {
    user_id: DataTypes.BIGINT,
    task_name: DataTypes.STRING,
    point: DataTypes.INTEGER,
    status: DataTypes.STRING,
    type: DataTypes.STRING,

}, {
    createdAt: 'create_time',
    updatedAt: 'update_time'
})

