import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js"
import { sandboxAPI } from "./AxiosService.js"

class TasksServices {
    async createTask(taskData) {
        const task = new Task(taskData)
        const res = await sandboxAPI.post('' + 'LizMadsen/todos', task)
    }

    removeTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    toggleCheckbox(checkbox, id) {
        console.log(checkbox.checked)
        let taskIndex = ProxyState.tasks.findIndex(t => t.id == id)
        let task = ProxyState.tasks[taskIndex]
        task.isChecked = !task.isChecked
        ProxyState.tasks[taskIndex] = task
        ProxyState.tasks = ProxyState.tasks
    }
}

export const tasksServices = new TasksServices()