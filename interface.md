## 每日任务TODO List系统 接口文档

版本: v1.0.0

### /TodoList/V1.0.0/todoTask

> 资源说明：todo任务

#### **GeneralParams:**

| 参数名 | 必选 | 类型   | 限制 | 说明       |
| ------ | ---- | ------ | ---- | ---------- |
| userID | 是   | string |      | 使用者名称 |



#### **RequestType**

请求方式

##### **GET**

> 简介：获取todo任务

**Params参数**

| 参数名 | 必选 | 类型   | 限制 | 说明           |
| ------ | ---- | ------ | ---- | -------------- |
| taskID | 否   | string |      | 查询指定任务ID |



**response参数**

| 参数名     | 类型   | 说明                               | 上级 |
| ---------- | ------ | ---------------------------------- | ---- |
| code       | number | 状态码                             |      |
| msg        | string | 提示信息                           |      |
| data       | object | 返回内容                           |      |
| taskID     | string | 任务ID                             | data |
| taskName   | String | 任务名称                           | data |
| taskStatus | string | 任务状态：已完成\|未完成           | data |
| taskType   | String | 任务类型：每日，每周，每月，一次性 | Data |
| taskPoint  | Number | 任务分数：                         | data |

示例：

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "taskID": "33018910",
        "taskName": "待办事项1",
        "taskStatus": "todo",
        "taskType": "once",
        "taskPoint": 50
    }
}
```





##### **PUT**

> 简介：创建一个todo任务

**body参数**

| 参数名   | 必选 | 类型   | 限制                         | 说明                               |
| -------- | ---- | ------ | ---------------------------- | ---------------------------------- |
| taskName | 是   | string |                              | 任务名称                           |
| taskType | 是   | string | daily\|weekly\|monthly\|once | 任务类型：每日，每周，每月，一次性 |

**response结果**

| 参数名 | 类型   | 说明     | 上级 |
| ------ | ------ | -------- | ---- |
| code   | number | 状态码   |      |
| msg    | string | 提示信息 |      |
| data   | object | 返回内容 |      |
| taskID | string | 任务ID   | data |



##### **POST**

> 简介：调整一个todo任务或者完成任务

**body参数**

| 参数名     | 必选 | 类型   | 限制       | 说明                     | 上级    |
| ---------- | ---- | ------ | ---------- | ------------------------ | ------- |
| taskID     | 是   | string |            | 任务唯一ID               |         |
| alter      | 是   | Object |            | 调整任务对象             |         |
| taskName   | 否   | string |            | 任务名称                 | alter   |
| taskType   | 否   | string | `daily     | weekly                   | monthly | once` | 任务类型：每日，每周，每月，一次性 | alter |
| tastStatus | 否   | string | done\|todo | 任务状态：已完成\|未完成 | alter   |
| taskPoint  | 否   | Number |            | 任务分数                 | Alter   |

**response结果**

| 参数名 | 类型   | 说明     | 上级 |
| ------ | ------ | -------- | ---- |
| code   | number | 状态码   |      |
| msg    | string | 提示信息 |      |
| data   | object | 返回内容 |      |
| taskID | string | 任务ID   | Data |



##### **DELETE**

> 简介：删除一个todo任务

**body参数**

| 参数名 | 必选 | 类型   | 限制 | 说明       |
| ------ | ---- | ------ | ---- | ---------- |
| taskID | 是   | string |      | 任务唯一ID |

**response结果**

| 参数名 | 类型   | 说明     | 上级 |
| ------ | ------ | -------- | ---- |
| code   | number | 状态码   |      |
| msg    | string | 提示信息 |      |
| data   | object | 返回内容 |      |
| taskID | string | 任务ID   | Data |



### /TodoList/V1.0.0/todoTaskList

> 资源说明：todo清单



#### **RequestType**

请求方式

##### **GET**

> 简介：获取todo任务清单

**Params参数**

| 参数名 | 必选 | 类型   | 限制 | 说明       |
| ------ | ---- | ------ | ---- | ---------- |
| userID | 是   | string |      | 使用者名称 |



**response参数**

| 参数名     | 类型   | 说明                     | 上级                      |
| ---------- | ------ | ------------------------ | ------------------------- |
| code       | number | 状态码                   |                           |
| msg        | string | 提示信息                 |                           |
| data       | Object | 返回内容                 |                           |
| once       | array  | 一次性任务列表           | data                      |
| daily      | array  | 每日任务列表             | data                      |
| weekley    | array  | 每周任务列表             | data                      |
| monthly    | array  | 每月任务列表             | data                      |
| taskID     | string | 任务ID                   | once/daily/weekly/monthly |
| taskName   | String | 任务名称                 | once/daily/weekly/monthly |
| taskStatus | string | 任务状态：已完成\|未完成 | once/daily/weekly/monthly |
| tastPoint  | number | 任务分数                 | once/daily/weekly/monthly |

示例：





```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "once": [
            {
                "taskID": "33018910",
                "taskName": "待办事项1",
                "taskStatus": "todo",
                "taskPoint": 50
            },
            {
                "taskID": "330182130",
                "taskName": "待办事项2",
                "taskStatus": "todo",
                "taskPoint": 60
            }
        ],
        "daily": [
            {
                "taskID": "33018910",
                "taskName": "待办事项1",
                "taskStatus": "todo",
                "taskPoint": 50
            },
            {
                "taskID": "330182130",
                "taskName": "待办事项2",
                "taskStatus": "done",
                "taskPoint": 60
            }
        ],
        "weekly": [],
        "monthly": [],
    }
}
```



### /TodoList/V1.0.0/todoTaskDegree

> 资源说明：todo清单完成情况

#### **RequestType**

请求方式

##### **GET**

> 简介：获取todo任务完成情况

**Params参数**

| 参数名 | 必选 | 类型   | 限制 | 说明       |
| ------ | ---- | ------ | ---- | ---------- |
| userID | 是   | string |      | 使用者名称 |



**response参数**

| 参数名  | 类型   | 说明               | 上级 |
| ------- | ------ | ------------------ | ---- |
| code    | number | 状态码             |      |
| msg     | string | 提示信息           |      |
| data    | Object | 返回内容           |      |
| once    | number | 一次性任务完成比率 | data |
| daily   | number | 每日任务完成比率   | data |
| weekley | number | 每周任务完成比率   | data |
| monthly | number | 每月任务完成比率   | data |

示例：

```json
{
    "code": 200,
    "msg": "success",
    "data": {
        "once": 0,
        "daily": 50,
        "weekly": 100,
        "monthly": 100
    }
}
```