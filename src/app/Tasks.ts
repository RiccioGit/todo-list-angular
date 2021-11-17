export interface Task {
    //question mark to make it optional
    id?: number,
    text: string,
    day: string,
    reminder: boolean
}