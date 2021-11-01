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
        this.taskRetrieve()
    }

    async taskRetrieve() {
        ProxyState.tasks = []
        const res = await sandboxAPI.get('' + 'LizMadsen/todos')
        res.data.forEach(t => {
            let taskData = {
                id: t.id,
                description: t.description,
                completed: t.completed
            }
            const newTask = new Task(taskData)
            ProxyState.tasks.push(newTask)
            ProxyState.tasks = ProxyState.tasks
        })

    }
}

export const listsService = new ListsService()