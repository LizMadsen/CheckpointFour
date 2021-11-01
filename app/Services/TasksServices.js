import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js"
import { sandboxAPI } from "./AxiosService.js"
import { listsService } from "./ListsService.js"

class TasksServices {
    async createTask(taskData) {
        const task = new Task(taskData)
        const res = await sandboxAPI.post('' + 'LizMadsen/todos', task)
        listsService.taskRetrieve()
    }

    async removeTask(id) {
        const res = await sandboxAPI.delete('' + 'LizMadsen/todos/' + id)

        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    async toggleCheckbox(id) {
        let taskIndex = ProxyState.tasks.findIndex(t => t.id == id)
        let task = ProxyState.tasks[taskIndex]
        task.completed = !task.completed
        const res = await sandboxAPI.put('' + 'LizMadsen/todos/' + id, task)
        // ProxyState.tasks[taskIndex] = task
        // ProxyState.tasks = ProxyState.tasks
        listsService.taskRetrieve()
    }
}

export const tasksServices = new TasksServices()