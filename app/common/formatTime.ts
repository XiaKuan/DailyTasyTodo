import * as moment from 'moment'

export function sleep(ms: number = 100) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function formatTime(): string {
    return moment().format("YYYY-MM-DD HH:mm:ss")
}
