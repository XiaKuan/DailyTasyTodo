import * as Koa from 'koa'

export interface route {
    method: string,
    path: string,
    controller: Koa.Middleware
}