import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";
import { sandboxAPI } from "../Services/AxiosService.js"

class ListsService {
    constructor() {
    }

    createList() {
        const list = new List()
        ProxyState.list = list
        const res = sandboxAPI.get('' + 'LizMadsen/todos')
        // res.data.forEach(t => {
        //     let taskData = {
        //         id: t.id,
        //         description: t.description,
        //         isChecked: t.completed
        //     }
        //     const newTask = new Task(taskData)
        //     ProxyState.tasks.push(newTask)
        // })
    }
}

export const listsService = new ListsService()